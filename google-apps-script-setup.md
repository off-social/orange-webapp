# Website forms → Google Sheet

Every form on the site (Book a Consultation modal, Contact, Career, Services,
About) posts straight from the browser to one Google Apps Script Web App, which
appends the row to a tab named after the form. The site is a static export, so
there is no server to proxy through — that is why the URL lives in the
`NEXT_PUBLIC_SHEET_WEBHOOK_URL` variable in `.env`.

- Script source: `google-apps-script/Code.gs` (keep in sync with the deployed copy)
- Client: `lib/forms.ts` → `hooks/useFormSubmit.ts`, and `components/ConsultationModal.tsx`

## Tabs and columns

| Form kind | Tab | Columns |
|---|---|---|
| consultation | Consultation | Timestamp, Name, Mobile, Printer, Message |
| contact | Contact | Timestamp, Name, Email, Subject, Message |
| career | Career | Timestamp, Name, Email, Position, Message |
| services | Services | Timestamp, Name, Email, Message |
| about | About | Timestamp, Name, Email, Message |

An existing tab is appended to as-is; only an empty tab gets a header row. A
payload with an unknown `form` value lands in an `Other` tab rather than being
dropped.

## Deploying (or re-pointing at a different sheet)

1. Open the sheet → **Extensions → Apps Script**.
2. Replace `Code.gs` with `google-apps-script/Code.gs` from this repo → **Save**.
3. **Deploy → New deployment** → type **Web app**
   - **Execute as:** Me
   - **Who has access:** **Anyone** (not "Anyone with a Google account" — the
     site posts unauthenticated, so anything else answers 403)
4. Authorize when prompted. The "Google hasn't verified this app" screen is
   expected for a personal script: **Advanced → Go to (project) (unsafe) → Allow**.
5. Copy the Web app URL (`https://script.google.com/macros/s/AKfyc.../exec`) into
   `NEXT_PUBLIC_SHEET_WEBHOOK_URL` in `.env`, then restart the dev server.

If you ever edit the script, **Deploy → Manage deployments → Edit → New version**,
otherwise the live URL keeps running the old code.

## Test

Open any form, submit, and check the tab. From the CLI:

```bash
curl -s -L -X POST "$WEBHOOK_URL" \
  -d '{"form":"consultation","name":"TEST","mobile":"9999999999","printer":"K64","message":"delete me"}'
```

A working deployment answers `{"success":true}`. HTML or a 403 means the
deployment's access is not set to **Anyone**.
