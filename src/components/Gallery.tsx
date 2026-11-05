import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useGallery } from "@/hooks/use-content";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

export const Gallery = () => {
  const { data: items } = useGallery();
  const [open, setOpen] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="wrap">
        <div className="mb-10 grid max-w-[62ch] gap-3.5">
          <p className="eyebrow">Gallery</p>
          <h2 className="h-section">From the trailer</h2>
          <p className="text-mist">Tap a photo to see it larger.</p>
        </div>

        <div className="grid grid-flow-dense grid-cols-2 gap-3.5 md:grid-cols-3">
          {items.map((g) => (
            <button
              key={g.caption}
              type="button"
              onClick={() => setOpen(g)}
              aria-label={`View larger: ${g.alt}`}
              className={cn(
                "group relative max-w-full cursor-zoom-in overflow-hidden rounded-md border border-line bg-panel",
                g.size === "wide" ? "col-span-2 aspect-[2/1]" : "aspect-square",
              )}
            >
              <img
                src={g.image}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="label-mono absolute bottom-3 left-3 rounded bg-ink/80 px-2.5 py-1 text-snow">
                {g.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl border-line bg-ink p-3 sm:p-4">
          <DialogTitle className="sr-only">{open?.caption}</DialogTitle>
          <DialogDescription className="sr-only">{open?.alt}</DialogDescription>
          {open && (
            <figure className="grid gap-3">
              <img src={open.image} alt={open.alt} className="max-h-[78vh] w-full rounded object-contain" />
              <figcaption className="label-mono text-center text-mist">{open.caption}</figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
