import BundleSelectionOptions from './selection/BundleSelectionOptions';
import BundleTitle from './BundleTitle';
import BundleSummary from './summary/BundleSummary';
import BundleAction from './action/BundleAction';

export default function BundleContent() {
  return (
    <div className="bg-greenLight flex flex-col gap-4 p-8 rounded-lg">
      <BundleTitle />
      <BundleSelectionOptions />
      <BundleSummary />
      <BundleAction />
    </div>
  );
}
