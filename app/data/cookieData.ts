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
    description: `The Rose Berry cookie features fresh raspberries and strawberries, floral vanilla, and white chocolate, accented with a hint of rose. This blend creates a flavorful experience, perfect for any occasion, especially afternoon tea. The raspberries add a fresh tartness, while the white chocolate introduces a creamy sweetness. The vanilla enhances the cookie's depth, and the rose adds a subtle, aromatic kiss. This cookie is designed for those who enjoy a sophisticated treat that pairs well with a variety of beverages or stands out on its own.`,
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
    description: `The Pistachio Blossom cookie is a delightful blend of roasted pistachios, orange, orange blossom, dark chocolate, and fleur de sel. This cookie offers a rich, nutty flavor with hints of citrus and a touch of saltiness. The pistachios provide a creamy, buttery texture, while the orange blossom adds a floral aroma. The dark chocolate adds a rich, dark flavor, and the fleur de sel provides a subtle saltiness. This cookie is designed for those who enjoy a sophisticated treat that pairs well with a variety of beverages or stands out on its own.`,
  },
  {
    name: 'Vanilla Velvet',
    ingredients: ['Mexican Vanilla', 'Madagascar Vanilla', 'Tahitian Vanilla'],
    image: '/cookies/VanillaVelvet.png',
    description: `The Vanilla Velvet cookie is a classic blend of Mexican vanilla, Madagascar vanilla, and Tahitian vanilla. This cookie offers a rich, creamy flavor with a hint of sweetness. The vanilla provides a floral aroma, and the creamy texture is enhanced by the Madagascar vanilla. This cookie is designed for those who enjoy a sophisticated treat that pairs well with a variety of beverages or stands out on its own.`,
  },
  {
    name: 'Lemon Fiori',
    ingredients: [
      'Sweet Lemon',
      'Sicilian Citrus Blossoms',
      'Caramelized White Chocolate',
    ],
    image: '/cookies/CitrusFiori.png',
    description: `The Lemon Fiori cookie is a blend of sweet lemon, Sicilian citrus blossoms, and caramelized white chocolate. This cookie offers a refreshing, citrusy flavor with hints of sweetness. The lemon provides a floral aroma, and the white chocolate adds a rich, creamy texture. This cookie is designed for those who enjoy a sophisticated treat that pairs well with a variety of beverages or stands out on its own.`,
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
