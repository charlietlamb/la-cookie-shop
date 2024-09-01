import BundleSelectionOptions from './selection/BundleSelectionOptions';
import BundleTitle from './BundleTitle';
import BundleSummary from './summary/BundleSummary';
import BundlePackaging from './packaging/BundlePackaging';
import BundleOrderSummary from './orderSummary/BundleOrderSummary';
import {BundlePlanSelector} from './plan/BundlePlanSelector';
import BundleAddToCart from './action/BundleAddToCart';

export default function BundleContent() {
  return (
    <div className="bg-greenLight flex flex-col gap-4 p-8 rounded-lg">
      <BundleTitle />
      <BundleSelectionOptions />
      <BundleSummary />
      <BundlePackaging />
      <BundlePlanSelector />
      <BundleOrderSummary />
      <BundleAddToCart />
    </div>
  );
}
