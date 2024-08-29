import {AnimatePresence, MotionValue, useMotionValueEvent} from 'framer-motion';
import {featuresData} from './featuresData';
import FeaturesFeature from './FeaturesFeature';

export default function FeaturesFeatures() {
  return (
    <div className="flex items-center justify-between gap-4">
      {featuresData.map((feature, index) => (
        <FeaturesFeature key={feature.title} feature={feature} index={index} />
      ))}
    </div>
  );
}
