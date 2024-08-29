import {HeartHandshake} from 'lucide-react';

export const featuresData = [
  {
    title: 'Easy to use',
    description:
      'Our platform is designed to be user-friendly and easy to navigate.',
    icon: <HeartHandshake strokeWidth={1.5} className="size-10" />,
  },
  {
    title: 'Secure',
    description:
      'Our platform is designed to be user-friendly and easy to navigate.',
    icon: <HeartHandshake strokeWidth={1.5} className="size-10" />,
  },
  {
    title: 'Secure',
    description:
      'Our platform is designed to be user-friendly and easy to navigate.',
    icon: <HeartHandshake strokeWidth={1.5} className="size-10" />,
  },
  {
    title: 'Secure',
    description:
      'Our platform is designed to be user-friendly and easy to navigate.',
    icon: <HeartHandshake strokeWidth={1.5} className="size-10" />,
  },
];

export type Feature = (typeof featuresData)[number];
