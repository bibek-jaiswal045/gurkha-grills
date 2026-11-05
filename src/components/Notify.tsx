import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormStatus } from "@/components/FormStatus";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { siteConfig } from "@/config/site";

const fieldLabel = "label-mono text-mist";
const fieldInput = "h-12 bg-ink text-base focus-visible:ring-ember";

export const Notify = () => {
  const { status, onSubmit } = useFormSubmit(
    siteConfig.forms.notifyEndpoint,
    "You're on the list. We'll email you before launch day.",
  );

  return (
    <section
      id="notify"
      className="section-padding"
      style={{
        background:
          "radial-gradient(ellipse at 85% 100%, hsl(var(--chilli) / 0.28), transparent 60%), hsl(var(--ink))",
      }}
    >
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="grid min-w-0 gap-4">
          <p className="eyebrow">{siteConfig.launchLabel}</p>
          <h2 className="h-section">Be first in the queue</h2>
          <p className="max-w-[46ch] text-mist">{siteConfig.launchNote}</p>
        </div>

        <form onSubmit={onSubmit} noValidate className="grid min-w-0 gap-4">
          <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-1.5">
              <Label htmlFor="notify-email" className={fieldLabel}>Email</Label>
              <Input id="notify-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={fieldInput} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="notify-area" className={fieldLabel}>Your area (optional)</Label>
              <Input id="notify-area" name="area" type="text" autoComplete="postal-code" placeholder="Town or postcode" className={fieldInput} />
            </div>
          </div>
          <Button type="submit" variant="chilli" size="lg" disabled={status.state === "sending"} className="sm:justify-self-start">
            Notify me at launch
          </Button>
          <FormStatus {...status} />
          <p className="text-sm text-mist">One email when we open, then only location updates. No spam.</p>
        </form>
      </div>
    </section>
  );
};
