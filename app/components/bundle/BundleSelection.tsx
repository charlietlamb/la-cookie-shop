import BundleSelectionDetails from './BundleSelectionDetails';
import BundleSelectionImage from './BundleSelectionImage';
import BundleSelectionOptions from './BundleSelectionOptions';

export default function BundleSelection() {
  return (
    <div className="flex gap-4">
      <BundleSelectionImage />
      <div className="flex flex-col w-full min-h-full">
        <BundleSelectionDetails />
        <BundleSelectionOptions />
      </div>
    </div>
  );
}
