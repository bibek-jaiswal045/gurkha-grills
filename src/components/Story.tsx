import { Ridge } from "@/components/Ridge";
import kitchen from "@/assets/trailer/service-window.webp";

export const Story = () => (
  <section id="story" className="bg-panel">
    <Ridge className="bg-ink text-panel" />
    <div className="wrap section-padding grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
      <div className="grid min-w-0 max-w-[60ch] gap-4">
        <p className="eyebrow">Our story</p>
        <h2 className="h-section">Named for the hills, cooked for the street</h2>
        <p className="text-[1.05rem] text-mist">
          The Gurkhas come from the hill villages of Nepal, and so does our cooking. Sekuwa is the smoky skewer
          you smell at every roadside stall from Dharan to Pokhara. Momos are what every Nepali kitchen makes when
          friends come round.
        </p>
        <p className="text-[1.05rem] text-mist">
          We built The Gurkha Grills to bring those flavours to the street: timur pepper, mustard oil, fresh achar
          and real charcoal, cooked in front of you from one small trailer.
        </p>
      </div>
      <figure className="min-w-0">
        <img
          src={kitchen}
          alt="The trailer's stainless steel kitchen lit through the service window"
          width={400}
          height={130}
          loading="lazy"
          className="w-full rounded-md border border-line"
        />
      </figure>
    </div>
    <Ridge className="text-ink" />
  </section>
);
