/**
 * Every sheet-backed form posts to one Google Apps Script Web App, which
 * appends the entry to a tab named after the form. See
 * google-apps-script-setup.md for the script and its deployment.
 *
 * The site is a static export, so there is no server to proxy through — the
 * browser calls the Web App directly, which is why the URL has to be a
 * NEXT_PUBLIC_ variable.
 */

/** Tab names live in the Apps Script; these keys are what select them. */
export type FormKind =
  | "consultation"
  | "contact"
  | "career"
  | "services"
  | "about";

// Referenced literally, not through a variable or destructuring, because Next
// only inlines NEXT_PUBLIC_ values into the browser bundle for literal lookups.
const WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL;

/**
 * Append one entry to the sheet. Resolves on success and throws otherwise, so
 * callers drive their own success and error states.
 */
export async function submitForm<T extends object>(
  kind: FormKind,
  // Generic rather than Record<string, string> so callers can pass their own
  // named form-state type without adding an index signature to it.
  fields: T,
): Promise<void> {
  if (!WEBHOOK_URL) {
    throw new Error("NEXT_PUBLIC_SHEET_WEBHOOK_URL is not configured");
  }

  // No Content-Type header is set on purpose. A plain string body keeps this a
  // CORS "simple request" that skips the preflight, which matters because Apps
  // Script does not answer OPTIONS. It still reads e.postData.contents.
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    body: JSON.stringify({ form: kind, ...fields }),
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Apps Script responded with ${response.status}`);
  }

  // Apps Script answers 200 even when its own handler threw, so the returned
  // payload is the only real confirmation.
  const result = (await response.json()) as {
    success?: boolean;
    error?: string;
  };
  if (!result.success) {
    throw new Error(result.error || "Apps Script reported a failure");
  }
}
