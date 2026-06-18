# Book a Consultation → Google Sheet setup (2 minutes)

The form posts to `/api/consultation`, which forwards the entry to a Google
Apps Script Web App that appends a row to the sheet. You only need to create
that Web App once and paste its URL into `.env.local`.

## Steps

1. Open the sheet:
   https://docs.google.com/spreadsheets/d/1KEUITgxH6MpyDEDlip5cNoi7tMJXx2SOTAg5yhBtS54/edit

2. Top menu → **Extensions → Apps Script**. A code editor opens in a new tab.

3. Delete whatever is in `Code.gs` and paste this exactly:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     var data = JSON.parse(e.postData.contents);
     var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
     sheet.appendRow([
       timestamp,
       data.name || "",
       data.mobile || "",
       data.printer || "",
       data.message || ""
     ]);
     return ContentService
       .createTextOutput(JSON.stringify({ success: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

4. Click **Save** (disk icon).

5. Click **Deploy → New deployment**.
   - Click the gear next to "Select type" → choose **Web app**.
   - **Execute as:** Me (your account)
   - **Who has access:** **Anyone**
   - Click **Deploy**.

6. Google will ask you to **Authorize access** the first time — click through,
   choose your account, "Advanced" → "Go to (project) → Allow".

7. Copy the **Web app URL** it shows (looks like
   `https://script.google.com/macros/s/AKfyc.../exec`).

8. Paste it into `.env.local`:

   ```
   CONSULTATION_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/AKfyc.../exec"
   ```

9. **Restart the dev server** (`Ctrl+C`, then `npm run dev`) so the new env var
   loads.

## Test

Open the modal anywhere, fill the form, click Submit → a new row should appear
in the sheet with columns: Timestamp | Name | Mobile | Printer | Message.

## Notes

- The form already opens from anywhere via the shared ConsultationContext, so
  every "Book a Consultation" button writes to this same sheet.
- (Optional) Add a header row in the sheet manually:
  `Timestamp  Name  Mobile  Printer  Message`
- If you ever edit the Apps Script code, you must **Deploy → Manage deployments
  → Edit → New version** (or the live URL keeps running the old code).
