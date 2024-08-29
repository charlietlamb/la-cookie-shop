import {MotionValue} from 'framer-motion';
import {createContext, useContext} from 'react';

interface FeaturesContext {
  scrollY: MotionValue<number>;
}

export const FeaturesContext = createContext<FeaturesContext | undefined>(
  undefined,
);

export function useFeaturesContext() {
  const context = useContext(FeaturesContext);
  if (!context) {
    throw new Error(
      'useFeaturesContext must be used within a FeaturesProvider',
    );
  }
  return context;
}
