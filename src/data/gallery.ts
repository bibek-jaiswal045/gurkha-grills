// Gallery photos. Add a file to src/assets and an entry here.
import frontThreeQuarterImg from "@/assets/trailer/front-three-quarter.webp";
import momoBasketImg from "@/assets/food/momo-basket.webp";
import serviceWindowImg from "@/assets/trailer/service-window.webp";
import sekuwaSkewersImg from "@/assets/food/sekuwa-skewers.webp";
import rearImg from "@/assets/trailer/rear.webp";
import rightSideImg from "@/assets/trailer/right-side.webp";

export interface GalleryItem {
  image: string;
  alt: string;
  caption: string;
  size: "wide" | "square";
}

export const gallery: GalleryItem[] = [
  {
    "image": frontThreeQuarterImg,
    "alt": "The Gurkha Grills trailer with its service hatch open",
    "caption": "The trailer",
    "size": "wide"
  },
  {
    "image": momoBasketImg,
    "alt": "Steamed momos in a bamboo basket with tomato achar",
    "caption": "Steamed momos",
    "size": "square"
  },
  {
    "image": serviceWindowImg,
    "alt": "Inside the stainless-steel kitchen through the service window",
    "caption": "The kitchen",
    "size": "square"
  },
  {
    "image": sekuwaSkewersImg,
    "alt": "Charcoal-grilled chicken sekuwa skewers",
    "caption": "Sekuwa on the grill",
    "size": "wide"
  },
  {
    "image": rearImg,
    "alt": "Rear doors of the trailer with the logo and social handle",
    "caption": "Find us by the logo",
    "size": "square"
  },
  {
    "image": rightSideImg,
    "alt": "Right side of the trailer with Himalayan mountains and a pagoda",
    "caption": "Himalayan soul",
    "size": "wide"
  }
];
