import { put } from '@vercel/blob';
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const RECOVERY_CODE_REGEX = /^[A-Z0-9]{8}$/;
const MAX_BODY_BYTES = 4.5 * 1024 * 1024; // Vercel serverless limit ~4.5 MB

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase().replace(/\s+/g, '');
}
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const {
      recoveryCode,
      backupBase64,
      userEmail,
      userPhone,
      userName,
    } = body as {
      recoveryCode?: string;
      backupBase64?: string;
      userEmail?: string;
      userPhone?: string;
      userName?: string;
    };

    if (!recoveryCode || typeof recoveryCode !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid recoveryCode' }, { status: 400 });
    }
    const code = recoveryCode.trim().toUpperCase();
    if (!RECOVERY_CODE_REGEX.test(code)) {
      return NextResponse.json(
        { error: 'Invalid recovery code. Must be 8 characters (A–Z, 2–9).' },
        { status: 400 }
      );
    }

    if (!backupBase64 || typeof backupBase64 !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid backupBase64' }, { status: 400 });
    }

    const raw = Buffer.from(backupBase64, 'base64');
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: 'Backup too large. Max ~4.5 MB. Consider compressing in the app.' },
        { status: 413 }
      );
    }

    const pathname = `decoy-backups/${code}`;
    await put(pathname, raw, {
      access: 'public',
      contentType: 'application/octet-stream',
      addRandomSuffix: false,
    });

    const createdAt = new Date().toISOString();
    const meta = {
      userEmail: typeof userEmail === 'string' ? userEmail.trim() : undefined,
      userPhone: typeof userPhone === 'string' ? userPhone.trim() : undefined,
      userName: typeof userName === 'string' ? userName.trim() : undefined,
      createdAt,
    };
    try {
      await kv.set(`decoy:meta:${code}`, meta);
      if (meta.userEmail) {
        await kv.set(`decoy:email:${normalizeEmail(meta.userEmail)}`, code);
      }
      if (meta.userPhone) {
        await kv.set(`decoy:phone:${normalizePhone(meta.userPhone)}`, code);
      }
    } catch (kvErr) {
      console.warn('KV metadata save failed (optional):', kvErr);
    }

    return NextResponse.json({
      ok: true,
      message: 'Backup stored. Use this recovery code to recover later. Save your code and optional contact details help support recover if you forget the code.',
    });
  } catch (err) {
    console.error('decoy-backup-upload error:', err);
    return NextResponse.json({ error: 'Failed to store backup' }, { status: 500 });
  }
}
