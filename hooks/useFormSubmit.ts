"use client";

import { submitForm, type FormKind } from "@/lib/forms";
import { useCallback, useState } from "react";

/**
 * Owns the state every sheet-backed form needs: field values, the in-flight
 * flag, and the success and error outcomes.
 *
 * The forms across the site look nothing alike, so this deliberately holds no
 * markup — each page keeps its own layout and only borrows the behaviour.
 *
 * Pass a module-level constant as `initial`; it is a dependency of the reset
 * path, so an object literal defined in the component would change identity on
 * every render.
 */
export function useFormSubmit<T extends Record<string, string>>(
  kind: FormKind,
  initial: T,
) {
  const [form, setForm] = useState<T>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      // Typing again means a new entry is being written, so the previous
      // outcome no longer applies and its message goes away.
      setSubmitted(false);
      setError("");
      setForm((previous) => ({ ...previous, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event?: React.FormEvent) => {
      event?.preventDefault();
      if (submitting) return;

      setSubmitting(true);
      setError("");
      try {
        await submitForm(kind, form);
        // The form stays on screen; only the fields are cleared, so a visitor
        // can send another enquiry without reloading.
        setForm(initial);
        setSubmitted(true);
      } catch {
        // The underlying reason is only useful to us, not to the visitor. The
        // fields are left as they are so nothing they typed is lost.
        setError("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
    [form, initial, kind, submitting],
  );

  return { form, submitting, submitted, error, handleChange, handleSubmit };
}
