import BundleContent from './BundleContent';
import BundleDisplay from './display/BundleDisplay';

export default function Bundle() {
  return (
    <div className="padding-main bundle relative grid grid-cols-2 py-8">
      <BundleDisplay />
      <BundleContent />
    </div>
  );
}
