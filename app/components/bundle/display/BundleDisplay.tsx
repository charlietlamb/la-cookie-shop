import BundleDisplayContent from './BundleDisplayContent';
import BundleDisplayText from './BundleDisplayText';

export default function BundleDisplay() {
  return (
    <div className="relative h-full min-h-full">
      <div className="sticky top-0">
        <div className="aspect-square flex flex-col items-center justify-center w-full overflow-hidden">
          <BundleDisplayContent />
        </div>
        <BundleDisplayText />
      </div>
    </div>
  );
}
