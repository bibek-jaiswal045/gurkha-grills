import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import logo from "@/assets/brand/logo.webp";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {siteConfig.status === "pre-launch" && (
        <div className="bg-chilli text-snow text-[0.85rem]">
          <div className="wrap flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center">
            <span className="h-2 w-2 rounded-full bg-snow animate-pulse-dot" aria-hidden="true" />
            <span>
              <strong>{siteConfig.launchLabel}.</strong> Launch-day location goes out first on Instagram
            </span>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="font-mono font-medium underline">
              {siteConfig.social.handle}
            </a>
          </div>
        </div>
      )}

      <header
        className="sticky z-40 border-b border-line bg-ink/90 backdrop-blur-md"
        style={{ top: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="wrap flex items-center justify-between gap-4 py-2.5">
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${siteConfig.name}, back to top`}>
            <img src={logo} alt="" width={44} height={45} className="rounded-full" />
            <span className="font-display text-[1.05rem] font-extrabold uppercase leading-[0.95] tracking-wide">
              The Gurkha
              <br />
              Grills
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-medium text-mist transition-colors hover:text-snow">
                {item.label}
              </a>
            ))}
            <Button asChild variant="chilli">
              <a href="#notify">Get launch updates</a>
            </Button>
          </nav>

          <Button
            variant="line"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-line bg-ink lg:hidden"
            >
              <div className="wrap flex flex-col pb-5 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="border-b border-line py-3.5 text-lg font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild variant="chilli" size="lg" className="mt-4">
                  <a href="#notify" onClick={() => setIsMenuOpen(false)}>
                    Get launch updates
                  </a>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
