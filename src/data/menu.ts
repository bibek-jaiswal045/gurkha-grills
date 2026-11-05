// Menu content. Edit dishes, prices and tags here.
// spice: 0 = none, 3 = hot. tags: "veg" | "vegan" | "signature"
import momoBasketImg from "@/assets/food/momo-basket.webp";
import sekuwaSkewersImg from "@/assets/food/sekuwa-skewers.webp";

export type Tag = "veg" | "vegan" | "signature" | "gluten-free";

export interface MenuItem {
  id: string;
  name: string;
  nepali?: string;
  description: string;
  price: number;
  tags: Tag[];
  spice: number;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  blurb: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    "id": "momos",
    "name": "Momos",
    "blurb": "Hand-folded dumplings, steamed to order. Plates of 8.",
    "items": [
      {
        "id": "chicken-momo",
        "name": "Chicken Momo",
        "nepali": "Kukhura ko momo",
        "description": "Minced chicken, ginger, garlic and coriander, served with roasted tomato achar.",
        "price": 8.5,
        "tags": [
          "signature"
        ],
        "spice": 1,
        "image": momoBasketImg
      },
      {
        "id": "veg-momo",
        "name": "Veg Momo",
        "nepali": "Tarkari momo",
        "description": "Cabbage, carrot, paneer and spring onion with sesame-tomato achar.",
        "price": 7.5,
        "tags": [
          "veg"
        ],
        "spice": 1
      },
      {
        "id": "jhol-momo",
        "name": "Jhol Momo",
        "nepali": "Jhol momo",
        "description": "Chicken momos in a warm, tangy sesame and tomato broth. Kathmandu's winter favourite.",
        "price": 9.5,
        "tags": [],
        "spice": 2
      },
      {
        "id": "c-momo",
        "name": "C-Momo",
        "nepali": "Chilli momo",
        "description": "Pan-tossed momos with peppers, onion and a sticky chilli glaze.",
        "price": 9.5,
        "tags": [],
        "spice": 3
      }
    ]
  },
  {
    "id": "grills",
    "name": "From the Grill",
    "blurb": "Marinated overnight in timur pepper and Himalayan spices, grilled over charcoal.",
    "items": [
      {
        "id": "chicken-sekuwa",
        "name": "Chicken Sekuwa",
        "nepali": "Kukhura sekuwa",
        "description": "Three skewers of charcoal-grilled thigh, with beaten rice and pickled radish.",
        "price": 10,
        "tags": [
          "signature"
        ],
        "spice": 2,
        "image": sekuwaSkewersImg
      },
      {
        "id": "lamb-sekuwa",
        "name": "Lamb Sekuwa",
        "nepali": "Khasi sekuwa",
        "description": "Lamb shoulder skewers with mustard oil, cumin and fresh chilli.",
        "price": 12,
        "tags": [],
        "spice": 2
      },
      {
        "id": "paneer-sekuwa",
        "name": "Paneer Sekuwa",
        "nepali": "Paneer sekuwa",
        "description": "Charred paneer and peppers with mint-coriander chutney.",
        "price": 9.5,
        "tags": [
          "veg"
        ],
        "spice": 1
      },
      {
        "id": "chicken-choila",
        "name": "Chicken Choila",
        "nepali": "Choila",
        "description": "Newari-style grilled chicken tossed with mustard oil, fenugreek and spring onion.",
        "price": 9,
        "tags": [],
        "spice": 3
      }
    ]
  },
  {
    "id": "sides",
    "name": "Sides & Snacks",
    "blurb": "Street snacks to share or pair with a plate.",
    "items": [
      {
        "id": "chatpate",
        "name": "Chatpate",
        "nepali": "Chatpate",
        "description": "Puffed rice, potato, onion, lime and chilli. Crunchy, sour, hot.",
        "price": 5,
        "tags": [
          "veg",
          "vegan"
        ],
        "spice": 2
      },
      {
        "id": "aloo-sadeko",
        "name": "Aloo Sadeko",
        "nepali": "Aloo sadeko",
        "description": "Spiced potato salad with toasted sesame, mustard oil and fenugreek.",
        "price": 4.5,
        "tags": [
          "veg",
          "vegan"
        ],
        "spice": 2
      },
      {
        "id": "beaten-rice",
        "name": "Chiura & Achar",
        "nepali": "Chiura",
        "description": "Crispy beaten rice with a trio of house pickles.",
        "price": 3.5,
        "tags": [
          "veg",
          "vegan"
        ],
        "spice": 1
      }
    ]
  },
  {
    "id": "drinks",
    "name": "Drinks",
    "blurb": "Something warm, something cold.",
    "items": [
      {
        "id": "masala-chiya",
        "name": "Masala Chiya",
        "nepali": "Chiya",
        "description": "Milky Nepali tea brewed with cardamom, ginger and clove.",
        "price": 3,
        "tags": [
          "veg"
        ],
        "spice": 0
      },
      {
        "id": "mango-lassi",
        "name": "Mango Lassi",
        "nepali": "Lassi",
        "description": "Thick yoghurt and Alphonso mango.",
        "price": 4,
        "tags": [
          "veg"
        ],
        "spice": 0
      },
      {
        "id": "soft-drinks",
        "name": "Soft Drinks",
        "nepali": "",
        "description": "Cans and bottled water.",
        "price": 1.5,
        "tags": [
          "veg",
          "vegan"
        ],
        "spice": 0
      }
    ]
  }
];
