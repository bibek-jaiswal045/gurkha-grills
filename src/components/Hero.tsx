import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ridge } from "@/components/Ridge";
import { siteConfig } from "@/config/site";
import trailer from "@/assets/trailer/left-side.webp";

const facts = [
  { label: "Status", value: siteConfig.launchLabel },
  { label: "Grill", value: "Charcoal" },
  { label: "Momos", value: "Folded daily" },
];

export const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-10 md:pt-20">
    <div className="wrap grid items-center gap-8 pb-6 md:gap-14 lg:grid-cols-[1fr_1.15fr]">
      <div className="grid min-w-0 gap-6">
        <p className="eyebrow">Nepali street food · Mobile trailer</p>
        <h1 className="text-[clamp(2.8rem,8vw,5.6rem)]">
          Bold flavours,
          <br />
          <span className="text-chilli">Himalayan</span> soul.
        </h1>
        <p className="max-w-[46ch] text-xl leading-normal text-mist">
          Charcoal-grilled sekuwa, hand-folded momos and home-style Nepali cooking, served from a trailer
          that's coming soon to a street near you.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="chilli" size="lg">
            <a href="#menu">See the menu</a>
          </Button>
          <Button asChild variant="line" size="lg">
            <a href="#notify">Tell me when you open</a>
          </Button>
        </div>
        <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="label-mono text-mist">{f.label}</dt>
              <dd className="mt-0.5 font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <motion.div
        className="relative -order-1 min-w-0 lg:order-none"
        initial={{ opacity: 0.4, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="absolute inset-x-[10%] bottom-0 top-[20%] blur-[30px]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--ember) / 0.35), transparent)" }}
          aria-hidden="true"
        />
        <img
          src={trailer}
          alt="The Gurkha Grills food trailer, matte black with the red logo and an open service window"
          width={790}
          height={340}
          className="relative w-full rounded-md"
          fetchPriority="high"
        />
      </motion.div>
    </div>
    <Ridge className="-mt-px text-panel" />
  </section>
);
