// Where the trailer will be.
// status: "confirmed" | "tba" | "booking"
// mapUrl: a Google Maps share link (shows an "Open in Maps" button once filled in)
export interface Stop {
  id: string;
  day: string;
  date: string;
  place: string;
  area: string;
  hours: string;
  status: "confirmed" | "tba" | "booking";
  mapUrl?: string;
}

export const scheduleNote =
  "Our first pitches are being confirmed now. Follow us on Instagram for the launch-day location.";

export const schedule: Stop[] = [
  {
    id: "launch",
    day: "Launch day",
    date: "",
    place: "To be announced",
    area: "",
    hours: "",
    status: "tba",
    mapUrl: "",
  },
  {
    id: "weekly-market",
    day: "Weekly market",
    date: "",
    place: "To be announced",
    area: "",
    hours: "",
    status: "tba",
    mapUrl: "",
  },
  {
    id: "events",
    day: "Events & festivals",
    date: "",
    place: "Booking now",
    area: "Private parties, weddings, corporate lunches",
    hours: "",
    status: "booking",
  },
];
