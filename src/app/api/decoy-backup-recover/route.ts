import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

const RECOVERY_CODE_REGEX = /^[A-Z0-9]{8}$/;

export async function GET(request: NextRequest) {
  try {
    const code = (
      request.nextUrl.searchParams.get('code') ?? request.nextUrl.searchParams.get('recoveryCode') ?? ''
    )
      .trim()
      .toUpperCase();

    if (!code || !RECOVERY_CODE_REGEX.test(code)) {
      return NextResponse.json(
        {
          error:
            'Invalid or missing recovery code. Use ?code=XXXXXXXX (8 characters A–Z, 2–9).',
        },
        { status: 400 }
      );
    }

    const prefix = 'decoy-backups/';
    const { blobs } = await list({ prefix });
    const match = blobs.find((b) => b.pathname === `${prefix}${code}`);

    if (!match) {
      return NextResponse.json(
        { error: 'No backup found for this recovery code.' },
        { status: 404 }
      );
    }

    const response = await fetch(match.url);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch backup' }, { status: 502 });
    }
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');

    return NextResponse.json({
      ok: true,
      recoveryCode: code,
      backupBase64: base64,
    });
  } catch (err) {
    console.error('decoy-backup-recover error:', err);
    return NextResponse.json({ error: 'Failed to recover backup' }, { status: 500 });
  }
}
