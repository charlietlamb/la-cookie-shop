import {motion} from 'framer-motion';
import BundleSelectionOptions from './selection/BundleSelectionOptions';
import BundleTitle from './BundleTitle';
import BundleSummary from './summary/BundleSummary';
import BundlePackaging from './packaging/BundlePackaging';
import BundleOrderSummary from './orderSummary/BundleOrderSummary';
import BundleAddToCart from './action/BundleAddToCart';
import BundlePlan from './plan/BundlePlan';
const containerVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export default function BundleContent() {
  return (
    <motion.div
      className="bg-greenLight md:flex-order-1 flex flex-col w-full gap-4 py-8 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      <BundleTitle />
      <BundleSelectionOptions />
      <BundleSummary />
      <BundlePackaging />
      <BundlePlan />
      <BundleOrderSummary />
      <BundleAddToCart />
    </motion.div>
  );
}
