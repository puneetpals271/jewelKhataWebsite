# Decoy backup lookup (support only)

When a user **forgot their recovery code**, support can look up their backup by **email** or **phone** (if they provided it when enabling cloud backup).

## Setup

1. In Vercel → Project → **Environment Variables**, add:
   - **DECOY_LOOKUP_SECRET**: a long random string (e.g. from `openssl rand -hex 32`). Only support staff should know this.

## Usage

**GET** with either header or query param:

- Header: `Authorization: Bearer <DECOY_LOOKUP_SECRET>`
- Or query: `?secret=<DECOY_LOOKUP_SECRET>`

**Query params:**

- `email=...` or `phone=...` – look up by the contact they gave when enabling backup.
- `includeBackup=true` – if you want the response to include the full backup (base64) so you can send it to the user.

**Examples:**

```bash
# Get recovery code and metadata only
curl -H "Authorization: Bearer YOUR_SECRET" \
  "https://jewelkhata.app/api/decoy-backup-lookup?email=user@example.com"

# Get recovery code + full backup
curl -H "Authorization: Bearer YOUR_SECRET" \
  "https://jewelkhata.app/api/decoy-backup-lookup?phone=9876543210&includeBackup=true"
```

**Response (200):** `{ "ok": true, "recoveryCode": "AB12CD34", "userEmail": "...", "createdAt": "...", "backupBase64": "..." }` (backupBase64 only if `includeBackup=true`).

**404:** No backup found for that email/phone.
