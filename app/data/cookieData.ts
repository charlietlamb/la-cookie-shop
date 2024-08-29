export const cookieData = [
  {
    name: 'Rose Berry',
    ingredients: [
      'Strawberries',
      'Raspberries',
      'Tahitian Vanilla',
      'Roses',
      'Lychee-White Chocolate',
    ],
    image: '/cookies/RoseBerry.png',
  },
  {
    name: 'Pistachio Blossom',
    ingredients: [
      'Roasted Pistachio',
      'Orange',
      'Orange Blossom',
      'Dark Chocolate',
      'Fleur de Sel',
    ],
    image: '/cookies/PistachioBlossom.png',
  },
  {
    name: 'Vanilla Velvet',
    ingredients: ['Mexican Vanilla', 'Madagascar Vanilla', 'Tahitian Vanilla'],
    image: '/cookies/VanillaVelvet.png',
  },
  {
    name: 'Lemon Fiori',
    ingredients: [
      'Sweet Lemon',
      'Sicilian Citrus Blossoms',
      'Caramelized White Chocolate',
    ],
    image: '/cookies/CitrusFiori.png',
  },
  {
    name: 'Chocolate Truffle',
    ingredients: [
      'Dark Chocolate',
      'Semi Sweet Chocolate',
      'French Cocoa',
      'Fleur de Sel',
    ],
    image: '/cookies/ChocolateTruffle.png',
  },
];

export type CookieData = (typeof cookieData)[number];
