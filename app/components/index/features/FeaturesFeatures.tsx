import {AnimatePresence, MotionValue, useMotionValueEvent} from 'framer-motion';
import {featuresData} from './featuresData';
import FeaturesFeature from './FeaturesFeature';

export default function FeaturesFeatures() {
  return (
    <div className="md:flex sm:grid-cols-2 grid items-stretch justify-between grid-cols-1 gap-4">
      {featuresData.map((feature, index) => (
        <FeaturesFeature key={feature.title} feature={feature} index={index} />
      ))}
    </div>
  );
}
