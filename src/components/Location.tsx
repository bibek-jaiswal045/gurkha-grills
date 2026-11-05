import { Instagram, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSchedule } from "@/hooks/use-content";
import { siteConfig } from "@/config/site";
import type { Stop } from "@/data/schedule";
import { cn } from "@/lib/utils";
import rear from "@/assets/trailer/rear.webp";

const statusLabel: Record<Stop["status"], string> = {
  confirmed: "Confirmed",
  tba: "To be announced",
  booking: "Taking bookings",
};

export const Location = () => {
  const { data } = useSchedule();
  const { area, mapUrl } = siteConfig.location;

  return (
    <section id="location" className="section-padding">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="min-w-0">
          <div className="mb-8 grid max-w-[62ch] gap-3.5">
            <p className="eyebrow">Location</p>
            <h2 className="h-section">Where to find the trailer</h2>
            <p className="text-mist">{data.note}</p>
          </div>

          {/* Home area */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-md border border-line bg-panel px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-chilli" aria-hidden="true" />
              <div className="min-w-0">
                <p className="label-mono text-mist">Serving</p>
                <p className="font-semibold">{area || "Area to be announced"}</p>
              </div>
            </div>
            {mapUrl && (
              <Button asChild variant="line" size="sm">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation /> Open in Maps
                </a>
              </Button>
            )}
          </div>

          {/* Upcoming stops */}
          <h3 className="mb-1 text-xl">Upcoming stops</h3>
          <ul className="mb-8 border-t border-line">
            {data.stops.map((s) => (
              <li
                key={s.id}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-2 border-b border-line py-4 sm:grid-cols-[minmax(120px,0.8fr)_minmax(0,1.4fr)_auto]"
              >
                <div className="grid min-w-0 gap-0.5">
                  <span className="font-display text-xl font-extrabold uppercase tracking-wide">{s.day}</span>
                  {s.date && <span className="text-sm text-mist">{s.date}</span>}
                  {s.hours && <span className="text-sm text-mist">{s.hours}</span>}
                </div>
                <div className="col-span-2 row-start-2 grid min-w-0 gap-0.5 sm:col-span-1 sm:row-start-auto">
                  <span className="font-semibold">{s.place}</span>
                  {s.area && <span className="text-sm text-mist">{s.area}</span>}
                  {s.mapUrl && (
                    <a
                      href={s.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ember hover:underline"
                    >
                      <Navigation size={14} /> Open in Maps
                    </a>
                  )}
                </div>
                <span
                  className={cn(
                    "label-mono justify-self-end whitespace-nowrap rounded-full border px-2.5 py-1",
                    s.status === "confirmed" && "border-veg text-veg",
                    s.status === "booking" && "border-ember text-ember",
                    s.status === "tba" && "border-line text-mist",
                  )}
                >
                  {statusLabel[s.status]}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="chilli" size="lg">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram /> Follow {siteConfig.social.handle}
              </a>
            </Button>
            <Button asChild variant="line" size="lg">
              <a href="#contact">Book us for an event</a>
            </Button>
          </div>
        </div>

        <figure className="-order-1 grid min-w-0 justify-items-center gap-3 lg:order-none">
          <img
            src={rear}
            alt="Rear of the trailer showing the logo and @thegurkhagrills"
            width={270}
            height={250}
            loading="lazy"
            className="w-full max-w-[220px] rounded-md lg:max-w-[320px]"
          />
          <figcaption className="text-center text-sm text-mist">Look for the red logo and the Himalayan ridge.</figcaption>
        </figure>
      </div>
    </section>
  );
};
