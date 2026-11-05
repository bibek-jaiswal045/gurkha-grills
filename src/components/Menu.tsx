import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useMenu } from "@/hooks/use-content";
import { siteConfig, formatPrice } from "@/config/site";
import type { MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

const spiceLabel = ["Not spicy", "Mild", "Medium", "Hot"];

const Spice = ({ level }: { level: number }) =>
  level > 0 ? (
    <span className="label-mono inline-flex items-center gap-1 text-mist" title={spiceLabel[level]}>
      <span className="sr-only">{spiceLabel[level]}</span>
      <span aria-hidden="true" className="inline-flex items-center gap-1">
        piro
        {[1, 2, 3].map((n) => (
          <i
            key={n}
            className={cn("h-3 w-[7px] rounded-[50%_50%_45%_45%/30%_30%_70%_70%]", n <= level ? "bg-chilli" : "bg-line")}
          />
        ))}
      </span>
    </span>
  ) : null;

const Tags = ({ item }: { item: MenuItem }) => (
  <>
    {item.tags.includes("vegan") ? (
      <Badge variant="outline" className="label-mono rounded border-veg text-veg">Vegan</Badge>
    ) : item.tags.includes("veg") ? (
      <Badge variant="outline" className="label-mono rounded border-veg text-veg">Veg</Badge>
    ) : null}
    {item.tags.includes("signature") && (
      <Badge variant="outline" className="label-mono rounded border-ember text-ember">Signature</Badge>
    )}
  </>
);

export const Menu = () => {
  const { data: menu } = useMenu();
  const [active, setActive] = useState("all");
  const [vegOnly, setVegOnly] = useState(false);

  const featured = useMemo(
    () => menu.flatMap((c) => c.items).filter((i) => i.tags.includes("signature") && i.image),
    [menu],
  );

  const visible = useMemo(
    () =>
      menu
        .filter((c) => active === "all" || c.id === active)
        .map((c) => ({ ...c, items: c.items.filter((i) => !vegOnly || i.tags.includes("veg")) }))
        .filter((c) => c.items.length > 0),
    [menu, active, vegOnly],
  );

  return (
    <section id="menu" className="section-padding bg-panel">
      <div className="wrap">
        <div className="mb-10 grid max-w-[62ch] gap-3.5">
          <p className="eyebrow">The menu</p>
          <h2 className="h-section">Grill smoke and steam baskets</h2>
          <p className="text-mist">
            A short menu we can cook well from a small kitchen. Spice is marked on the <em>piro</em> scale
            (Nepali for "spicy"), and we can dial most dishes down.
          </p>
        </div>

        <div className="mb-14 grid gap-5 md:grid-cols-2">
          {featured.map((i) => (
            <article key={i.id} className="grid grid-rows-[auto_1fr] overflow-hidden rounded-md border border-line bg-ink">
              <img src={i.image} alt={i.name} className="aspect-[16/7] w-full object-cover" loading="lazy" />
              <div className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-2 px-6 pb-6 pt-5">
                <span className="label-mono col-start-1 text-ember">House signature</span>
                <h3 className="col-start-1 text-[1.6rem]">{i.name}</h3>
                <span className="col-start-2 row-start-2 font-mono text-xl font-medium tabular-nums">
                  {formatPrice(i.price)}
                </span>
                <p className="col-start-1 text-mist">{i.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mb-2 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6"
          role="toolbar"
          aria-label="Filter the menu"
        >
          <div className="flex flex-wrap gap-2">
            {[{ id: "all", name: "All" }, ...menu].map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === c.id
                    ? "border-snow bg-snow text-ink"
                    : "border-line text-mist hover:border-mist hover:text-snow",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <Switch id="veg-only" checked={vegOnly} onCheckedChange={setVegOnly} className="data-[state=checked]:bg-veg" />
            <Label htmlFor="veg-only" className="cursor-pointer text-mist">Vegetarian only</Label>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="py-8 text-mist">No vegetarian dishes in this section yet.</p>
        ) : (
          <div className="grid gap-x-14 md:grid-cols-2">
            {visible.map((c) => (
              <section key={c.id} aria-labelledby={`cat-${c.id}`} className="min-w-0 pt-8">
                <header className="mb-2 grid gap-1.5">
                  <h3 id={`cat-${c.id}`} className="text-[1.6rem] text-chilli">{c.name}</h3>
                  <p className="text-sm text-mist">{c.blurb}</p>
                </header>
                <ul>
                  {c.items.map((i) => (
                    <li key={i.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-dashed border-line py-4 last:border-b-0">
                      <div className="grid min-w-0 gap-1">
                        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                          <span className="text-[1.08rem] font-semibold">{i.name}</span>
                          {i.nepali && i.nepali !== i.name && (
                            <span className="text-sm italic text-mist">{i.nepali}</span>
                          )}
                        </div>
                        <p className="text-[0.95rem] text-mist">{i.description}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
                          <Tags item={i} />
                          <Spice level={i.spice} />
                        </div>
                      </div>
                      <span className="font-mono font-medium tabular-nums">{formatPrice(i.price)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        {siteConfig.pricesAreDraft && (
          <p className="mt-10 border-t border-line pt-5 text-sm text-mist">
            Draft menu. Dishes and prices may change before launch. Please tell us about allergies when you order.
          </p>
        )}
      </div>
    </section>
  );
};
