import { Facebook, Instagram } from "lucide-react";
import { Ridge } from "@/components/Ridge";
import { siteConfig } from "@/config/site";
import logo from "@/assets/brand/logo.webp";

export const Footer = () => (
  <footer className="bg-ink">
    <Ridge className="bg-panel text-ink" />
    <div className="wrap grid gap-8 pb-10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div className="grid justify-items-start gap-3.5 sm:col-span-2 lg:col-span-1">
        <img src={logo} alt={`${siteConfig.name} logo`} width={96} height={99} className="rounded-full" />
        <p className="font-display text-xl font-extrabold uppercase tracking-wide">{siteConfig.tagline}</p>
      </div>
      <div className="grid content-start gap-1.5 text-mist">
        <h3 className="mb-1 text-xl text-snow">Location</h3>
        <p>{siteConfig.location.area || siteConfig.contact.serviceArea}</p>
        <p>Daily locations on Instagram</p>
      </div>
      <div className="grid min-w-0 content-start gap-1.5 text-mist">
        <h3 className="mb-1 text-xl text-snow">Contact</h3>
        <p className="break-all font-mono text-sm">{siteConfig.contact.email}</p>
        {siteConfig.contact.phone && <p className="font-mono text-sm">{siteConfig.contact.phone}</p>}
      </div>
      <div className="grid content-start gap-1.5 text-mist">
        <h3 className="mb-1 text-xl text-snow">Follow</h3>
        <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-snow">
          <Instagram size={16} /> Instagram
        </a>
        <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-snow">
          <Facebook size={16} /> Facebook
        </a>
      </div>
    </div>
    <div className="wrap flex flex-wrap justify-between gap-2 border-t border-line pb-7 pt-5 text-sm text-mist">
      <span>© {new Date().getFullYear()} {siteConfig.name}</span>
      <span className="font-mono">{siteConfig.social.handle}</span>
    </div>
  </footer>
);
