import {motion} from 'framer-motion';
import {useAtomValue} from 'jotai';
import {useEffect, useState, useMemo} from 'react';
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
  const [luxuryPackaging, setLuxuryPackaging] = useState(
    boxes[1]?.id === selectedBox?.id,
  );

  useEffect(() => {
    setLuxuryPackaging(boxes[1]?.id === selectedBox?.id);
  }, [boxes, selectedBox]);

  const basePrice = useMemo(() => {
    return parseFloat(selectedBox?.variants.nodes[0]?.price.amount || '0');
  }, [selectedBox]);

  const finalPrice = useMemo(() => {
    let price = basePrice;
    if (subscription) {
      price *= 0.8; // 20% discount for subscription
    }
    return price;
  }, [basePrice, luxuryPackaging, subscription]);

  if (!boxes || !selectedBox) return null;

  return (
    <motion.div
      className="border-sand flex flex-col items-center p-4 mx-8 bg-white border rounded-none"
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
      <motion.div
        className="flex flex-col w-full gap-2"
        variants={itemVariants}
      >
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
        <motion.div className="font-silk" variants={itemVariants}>
          Price: €{finalPrice.toFixed(2)}{' '}
          {subscription && <span> / month</span>}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
