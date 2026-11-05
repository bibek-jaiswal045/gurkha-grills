// Centralized business configuration
// Update these values here and they will reflect across the entire site

export const siteConfig = {
  // Basic Info
  name: "The Gurkha Grills",
  shortName: "Gurkha Grills",
  tagline: "Bold Flavours, Himalayan Soul.",
  description:
    "Nepali street food from a mobile trailer: charcoal sekuwa, hand-folded momos and Himalayan comfort food. Opening soon.",
  url: "https://thegurkhagrills.com", // update once the domain is registered

  // Launch status: "pre-launch" shows the opening-soon banner and copy
  status: "pre-launch" as "pre-launch" | "open",
  launchLabel: "Opening soon",
  launchNote:
    "We're getting the trailer road-ready. Leave your email and we'll tell you where we'll be on day one.",

  // Menu
  currency: "£",
  pricesAreDraft: true,

  // Contact
  contact: {
    email: "hello@thegurkhagrills.com", // placeholder
    phone: "", // e.g. "+44 7700 900123". Shown in Contact once filled in
    whatsapp: "", // e.g. "https://wa.me/447700900123". Shown in Contact once filled in
    replyTime: "We usually reply within one working day.",
    serviceArea: "Locations to be announced",
  },

  // Location: the home base / main area the trailer serves
  location: {
    area: "", // e.g. "Aldershot & Farnborough". Empty = "to be announced"
    mapUrl: "", // Google Maps link to the regular pitch, once there is one
  },

  // Social Links
  social: {
    handle: "@thegurkhagrills",
    instagram: "https://instagram.com/thegurkhagrills",
    facebook: "https://facebook.com/thegurkhagrills",
  },

  // Form endpoints (Formspree / Web3Forms / own API). Empty = preview mode, nothing is sent.
  forms: {
    notifyEndpoint: "",
    contactEndpoint: "", // Contact form, including catering enquiries
  },
};

// Helper formatters
export const formatPrice = (value: number) =>
  `${siteConfig.currency}${value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)}`;
