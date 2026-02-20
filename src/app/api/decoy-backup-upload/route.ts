import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

const RECOVERY_CODE_REGEX = /^[A-Z0-9]{8}$/;
const MAX_BODY_BYTES = 4.5 * 1024 * 1024; // Vercel serverless limit ~4.5 MB

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { recoveryCode, backupBase64 } = body as { recoveryCode?: string; backupBase64?: string };

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

    return NextResponse.json({
      ok: true,
      message: 'Backup stored. Use this recovery code to recover later.',
    });
  } catch (err) {
    console.error('decoy-backup-upload error:', err);
    return NextResponse.json({ error: 'Failed to store backup' }, { status: 500 });
  }
}
