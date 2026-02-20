import { kv } from '@vercel/kv';
import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Support-only: look up decoy backup by user email or phone when user forgot recovery code.
 * Requires DECOY_LOOKUP_SECRET env to be set; call with header: Authorization: Bearer <DECOY_LOOKUP_SECRET>
 * or query param: ?secret=<DECOY_LOOKUP_SECRET>
 */
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase().replace(/\s+/g, '');
}
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

function getSecret(request: NextRequest): string | null {
  const auth = request.headers.get('authorization');
  if (auth?.startsWith('Bearer ')) return auth.slice(7);
  return request.nextUrl.searchParams.get('secret');
}

export async function GET(request: NextRequest) {
  const secret = process.env.DECOY_LOOKUP_SECRET;
  if (!secret || getSecret(request) !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const email = request.nextUrl.searchParams.get('email');
  const phone = request.nextUrl.searchParams.get('phone');
  const includeBackup = request.nextUrl.searchParams.get('includeBackup') === 'true';

  if (!email && !phone) {
    return NextResponse.json(
      { error: 'Provide email or phone: ?email=... or ?phone=...' },
      { status: 400 }
    );
  }

  try {
    let code: string | null = null;
    if (email) code = await kv.get<string>(`decoy:email:${normalizeEmail(email)}`);
    if (!code && phone) code = await kv.get<string>(`decoy:phone:${normalizePhone(phone)}`);

    if (!code) {
      return NextResponse.json(
        { error: 'No backup found for this email or phone.' },
        { status: 404 }
      );
    }

    const meta = await kv.get<{ userEmail?: string; userPhone?: string; userName?: string; createdAt?: string }>(
      `decoy:meta:${code}`
    );

    const result: { ok: true; recoveryCode: string; userEmail?: string; userPhone?: string; userName?: string; createdAt?: string; backupBase64?: string } = {
      ok: true,
      recoveryCode: code,
      ...meta,
    };

    if (includeBackup) {
      const prefix = 'decoy-backups/';
      const { blobs } = await list({ prefix });
      const match = blobs.find((b) => b.pathname === `${prefix}${code}`);
      if (match) {
        const res = await fetch(match.url);
        if (res.ok) {
          const buffer = await res.arrayBuffer();
          result.backupBase64 = Buffer.from(buffer).toString('base64');
        }
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error('decoy-backup-lookup error:', err);
    return NextResponse.json({ error: 'Failed to lookup backup' }, { status: 500 });
  }
}
