import BundleAddToCart from './BundleAddToCart';
import BundleSelection from './BundleSelection';
import BundleSummary from './BundleSummary';
import BundleTitle from './BundleTitle';
import BundleVariants from './BundleVariants';

export default function Bundle() {
  return (
    <div className="bg-brown padding-main bundle flex flex-col py-8 text-white">
      <BundleTitle />
      <BundleSelection />
      <BundleVariants />
      <BundleSummary />
      <BundleAddToCart />
    </div>
  );
}
