import {motion} from 'framer-motion';
import BundleSelectionOptions from './selection/BundleSelectionOptions';
import BundleTitle from './BundleTitle';
import BundleSummary from './summary/BundleSummary';
import BundlePackaging from './packaging/BundlePackaging';
import BundleOrderSummary from './orderSummary/BundleOrderSummary';
import {BundlePlanSelector} from './plan/BundlePlanSelector';
import BundleAddToCart from './action/BundleAddToCart';

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
      className="bg-greenLight md:flex-order-1 flex flex-col w-full gap-4 p-8 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      <BundleTitle />
      <BundleSelectionOptions />
      <BundleSummary />
      <BundlePackaging />
      <BundlePlanSelector />
      <BundleOrderSummary />
      <BundleAddToCart />
    </motion.div>
  );
}
