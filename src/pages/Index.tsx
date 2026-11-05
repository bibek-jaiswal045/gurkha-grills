import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Location } from "@/components/Location";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Notify } from "@/components/Notify";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-clip bg-background">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-chilli focus:px-4 focus:py-2 focus:text-snow"
    >
      Skip to main content
    </a>
    <Header />
    <main id="main-content" className="flex w-full flex-col">
      <Hero />
      <Menu />
      <Location />
      <Gallery />
      <Story />
      <Notify />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
