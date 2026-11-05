import { useState } from "react";
import { Facebook, Instagram, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormStatus } from "@/components/FormStatus";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { siteConfig } from "@/config/site";

const topics = [
  { value: "general", label: "General question" },
  { value: "catering", label: "Catering or event booking" },
  { value: "feedback", label: "Feedback" },
];
const eventTypes = ["Wedding or party", "Corporate / office lunch", "Festival or market", "Community event", "Something else"];
const cateringPoints = ["Fully self-contained trailer kitchen", "Veg and vegan options on every menu", "Menus built around your guest count"];

const fieldLabel = "label-mono text-mist";
const fieldInput = "h-11 bg-ink text-base focus-visible:ring-ember";

type Channel = { icon: LucideIcon; label: string; value: string; href?: string; mono?: boolean };

const { contact, social } = siteConfig;
const channels: Channel[] = [
  { icon: Mail, label: "Email", value: contact.email, mono: true },
  contact.phone && { icon: Phone, label: "Phone", value: contact.phone, mono: true },
  contact.whatsapp && { icon: MessageCircle, label: "WhatsApp", value: "Message us", href: contact.whatsapp },
  { icon: Instagram, label: "Instagram", value: social.handle, href: social.instagram },
  { icon: Facebook, label: "Facebook", value: "The Gurkha Grills", href: social.facebook },
].filter(Boolean) as Channel[];

export const Contact = () => {
  const [topic, setTopic] = useState("general");
  const { status, onSubmit } = useFormSubmit(
    siteConfig.forms.contactEndpoint,
    "Thanks! We'll get back to you soon.",
  );
  const isCatering = topic === "catering";

  return (
    <section id="contact" className="section-padding border-t border-line bg-panel">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="grid min-w-0 gap-6">
          <div className="grid gap-4">
            <p className="eyebrow">Contact</p>
            <h2 className="h-section">Get in touch</h2>
            <p className="max-w-[50ch] text-mist">
              Questions about the menu, booking the trailer for an event, or just want to say hello? Send us a message.{" "}
              {contact.replyTime}
            </p>
          </div>

          <ul className="grid gap-2">
            {channels.map((c) => {
              const body = (
                <>
                  <c.icon className="h-5 w-5 shrink-0 text-chilli" aria-hidden="true" />
                  <span className="label-mono w-24 shrink-0 text-mist">{c.label}</span>
                  <span className={c.mono ? "min-w-0 select-all break-all font-mono text-sm" : "min-w-0"}>{c.value}</span>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-md border border-line bg-ink px-4 py-3 transition-colors hover:border-mist"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-md border border-line bg-ink px-4 py-3">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="grid gap-3 rounded-md border border-line px-5 py-4">
            <p className="font-display text-xl font-extrabold uppercase tracking-wide">Bring the trailer to your event</p>
            <ul className="grid gap-2 text-mist">
              {cateringPoints.map((p) => (
                <li key={p} className="flex items-baseline gap-3">
                  <span className="text-[0.7rem] text-chilli" aria-hidden="true">▲</span>
                  {p}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setTopic("catering");
                document.getElementById("contact-topic")?.focus();
              }}
              className="justify-self-start text-sm font-semibold text-ember hover:underline"
            >
              Ask for a catering quote →
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="grid min-w-0 gap-4 rounded-md border border-line bg-ink p-5 sm:p-8">
          <div className="grid gap-1.5">
            <Label htmlFor="contact-topic" className={fieldLabel}>What's it about?</Label>
            <select
              id="contact-topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="h-11 w-full rounded-md border border-input bg-ink px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
            >
              {topics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="contact-name" className={fieldLabel}>Name</Label>
              <Input id="contact-name" name="name" autoComplete="name" required className={fieldInput} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="contact-email" className={fieldLabel}>Email</Label>
              <Input id="contact-email" name="email" type="email" autoComplete="email" required className={fieldInput} />
            </div>
            <div className="grid gap-1.5 sm:col-span-2">
              <Label htmlFor="contact-phone" className={fieldLabel}>Phone (optional)</Label>
              <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={fieldInput} />
            </div>
          </div>

          {isCatering && (
            <fieldset className="grid gap-3 rounded-md border border-dashed border-line p-4 sm:grid-cols-3">
              <legend className="label-mono px-1 text-ember">Event details</legend>
              <div className="grid gap-1.5">
                <Label htmlFor="contact-date" className={fieldLabel}>Event date</Label>
                <Input id="contact-date" name="date" type="date" className={fieldInput} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="contact-type" className={fieldLabel}>Type of event</Label>
                <select
                  id="contact-type"
                  name="eventType"
                  className="h-11 w-full rounded-md border border-input bg-ink px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  {eventTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="contact-guests" className={fieldLabel}>Guests</Label>
                <Input id="contact-guests" name="guests" type="number" min={10} step={10} inputMode="numeric" placeholder="e.g. 80" className={fieldInput} />
              </div>
            </fieldset>
          )}

          <div className="grid gap-1.5">
            <Label htmlFor="contact-message" className={fieldLabel}>Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder={isCatering ? "Location, timings, dietary needs" : "How can we help?"}
              className="bg-ink text-base focus-visible:ring-ember"
            />
          </div>

          <Button type="submit" variant="chilli" size="lg" disabled={status.state === "sending"} className="sm:justify-self-start">
            {isCatering ? "Request a quote" : "Send message"}
          </Button>
          <FormStatus {...status} />
        </form>
      </div>
    </section>
  );
};
