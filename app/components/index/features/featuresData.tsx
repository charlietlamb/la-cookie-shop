export const featuresData = [
  {
    title: 'Health-Conscious Indulgence',
    description:
      'Enjoy the richness of gourmet cookies with less sugar and fat, delivering a balanced, guilt-free indulgence that never sacrifices flavor.',
    icon: '🍪',
  },
  {
    title: 'Locally Sourced, Premium Ingredients',
    description:
      'We pride ourselves on using the finest, locally sourced ingredients from our Portuguese farmers, ensuring every cookie is crafted with exceptional quality and care.',
    icon: '🇵🇹',
  },
  {
    title: 'Unique Parisian-Inspired Flavors',
    description:
      'Experience a fusion of Parisian elegance and bold flavors, with cookies inspired by iconic French desserts like Ispahan, creating a taste adventure in every bite.',
    icon: '🍰',
  },
  {
    title: 'Customisable Gift Boxes',
    description:
      'Create your own bespoke cookie selection, perfect for gifts or indulging yourself in a moment of luxury.',
    icon: '🎁',
  },
];

export type Feature = (typeof featuresData)[number];
