export const featuresData = [
  {
    title: 'Artisanal Excellence',
    description:
      'Our cookies are handcrafted with love, using only the finest ingredients sourced from local Portuguese markets.',
    icon: '🍪',
  },
  {
    title: 'Lisbon-Inspired Flavors',
    description:
      "Experience unique flavors inspired by Lisbon's rich culinary heritage, from Pastéis de Nata to Port Wine infusions.",
    icon: '🇵🇹',
  },
  {
    title: 'Customizable Gift Boxes',
    description:
      'Create your own bespoke cookie selection, perfect for gifts or indulging yourself in a moment of luxury.',
    icon: '🎁',
  },
  {
    title: 'Cozy Tasting Experience',
    description:
      'Visit our charming shop in the heart of Lisbon for a warm, inviting atmosphere and freshly baked treats.',
    icon: '☕',
  },
];

export type Feature = (typeof featuresData)[number];
