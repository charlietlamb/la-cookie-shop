import BundlePlanAdvice from './BundlePlanAdvice';
import BundlePlanDetails from './BundlePlanDetails';
import {BundlePlanSelector} from './BundlePlanSelector';

export default function BundlePlan() {
  return (
    <div className="bg-lightrounded-t-lg">
      <BundlePlanAdvice />
      <BundlePlanDetails />
      <BundlePlanSelector />
    </div>
  );
}
