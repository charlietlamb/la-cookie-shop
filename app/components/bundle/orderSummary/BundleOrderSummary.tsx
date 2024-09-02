import {motion} from 'framer-motion';
import {useAtomValue} from 'jotai';
import ProductSummary from '~/components/cart/ProductSummary';
import {Separator} from '~/components/ui/separator';
import {getOrderDetails} from '~/functions/getOrderDetails';
import {
  boxesAtom,
  bundleAtom,
  selectedBoxAtom,
  subscriptionAtom,
} from '~/store/bundle';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
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

const itemVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {opacity: 1, x: 0, transition: {duration: 0.4}},
};

export default function BundleOrderSummary() {
  const bundle = useAtomValue(bundleAtom);
  const subscription = useAtomValue(subscriptionAtom);
  const boxes = useAtomValue(boxesAtom);
  const selectedBox = useAtomValue(selectedBoxAtom);
  if (!boxes || !selectedBox) return null;
  const luxuryPackaging = boxes[1].id === selectedBox?.id;

  return (
    <motion.div
      className="border-green flex flex-col items-center p-4 bg-white border rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      <motion.h5
        className="font-silk text-2xl uppercase"
        variants={itemVariants}
      >
        Bundle summary
      </motion.h5>
      <Separator />
      <motion.div className="flex flex-col w-full" variants={itemVariants}>
        {bundle.length > 0 ? (
          <ProductSummary
            attributes={[
              {
                key: 'Order Details',
                value: getOrderDetails(bundle),
              },
            ]}
            className="py-2"
            start
          />
        ) : (
          <p className="font-silk">Add cookies to your order!</p>
        )}
        <motion.div className="font-silk" variants={itemVariants}>
          Order Type:{' '}
          {subscription ? 'Subscription (Delivered every 4 weeks)' : 'One-time'}
        </motion.div>
        <motion.div className="font-silk" variants={itemVariants}>
          Packaging: {luxuryPackaging ? 'Luxury' : 'Standard'}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
