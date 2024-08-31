import FeaturesFeatures from './FeaturesFeatures';
import FeaturesTrustPilot from './FeaturesTrustPilot';

export default function FeaturesContent({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className="flex flex-col gap-8 p-8 bg-white rounded-lg">
      <FeaturesTrustPilot />
      <FeaturesFeatures />
    </div>
  );
}
