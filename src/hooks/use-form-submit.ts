import { useState, type FormEvent } from "react";
import { toast } from "sonner";

type Status = { state: "" | "ok" | "error" | "sending"; message: string };

/**
 * Shared submit handler for the notify and catering forms.
 * With an endpoint (Formspree / Web3Forms / own API) it POSTs the form data.
 * With an empty endpoint (preview) it validates and confirms but sends nothing.
 */
export const useFormSubmit = (endpoint: string, successMessage: string) => {
  const [status, setStatus] = useState<Status>({ state: "", message: "" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setStatus({ state: "error", message: "Please add a valid email address and fill in the required fields." });
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }

    if (!endpoint) {
      setStatus({ state: "ok", message: "Thanks! (Preview only: this form isn't connected yet, so nothing was sent.)" });
      form.reset();
      return;
    }

    setStatus({ state: "sending", message: "Sending…" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ state: "ok", message: successMessage });
      toast.success(successMessage);
      form.reset();
    } catch {
      setStatus({ state: "error", message: "That didn't go through. Please try again, or email us directly." });
    }
  };

  return { status, onSubmit };
};
