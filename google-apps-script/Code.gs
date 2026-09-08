/**
 * Orange O Tec — website forms → Google Sheet.
 *
 * `form` in the payload picks the tab; a missing tab is created with a header
 * row. Deploy as: Web app | Execute as: Me | Who has access: Anyone.
 * After any edit: Deploy → Manage deployments → Edit → New version.
 */
var FORMS = {
  consultation: ["Consultation", ["name", "mobile", "printer", "message"]],
  contact:      ["Contact",      ["name", "email", "subject", "message"]],
  career:       ["Career",       ["name", "email", "position", "message"]],
  services:     ["Services",     ["name", "email", "message"]],
  about:        ["About",        ["name", "email", "message"]]
};

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var c = FORMS[String(d.form || "consultation").toLowerCase()];
    if (!c) c = ["Other", Object.keys(d)];
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(c[0]) || ss.insertSheet(c[0]);
    if (sh.getLastRow() === 0) sh.appendRow(["Timestamp"].concat(c[1]));
    var row = [Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss")];
    for (var i = 0; i < c[1].length; i++) row.push(d[c[1][i]] || "");
    sh.appendRow(row);
    return out({ success: true });
  } catch (err) {
    return out({ success: false, error: String(err) });
  }
}

function doGet() { return out({ success: true, status: "ok" }); }

function out(p) {
  return ContentService.createTextOutput(JSON.stringify(p))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run once from the editor to create the tabs and their header rows up front.
 * Not used by the site — doPost creates a missing tab on its own — but it is
 * the quickest way to confirm the script is bound to the right spreadsheet.
 */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  for (var k in FORMS) {
    var c = FORMS[k];
    var sh = ss.getSheetByName(c[0]) || ss.insertSheet(c[0]);
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Timestamp"].concat(c[1]));
      sh.getRange(1, 1, 1, c[1].length + 1).setFontWeight("bold");
      sh.setFrozenRows(1);
    }
  }
}
