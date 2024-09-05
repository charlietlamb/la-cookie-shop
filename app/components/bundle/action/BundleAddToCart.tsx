import {motion} from 'framer-motion';
import {
  boxesAtom,
  bundleAtom,
  bundleQuantityAtom,
  MAX_QUANTITY,
  selectedBoxAtom,
  selectedVariantAtom,
  subscriptionAtom,
} from '~/store/bundle';
import {Button} from '../../ui/button';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {AddToCartButton} from '../../AddToCartButton';
import {getOrderDetails} from '~/functions/getOrderDetails';
import {useEffect, useState} from 'react';
import {useOpenStore} from '~/store/open';
import {cn} from '~/lib/utils';

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

const buttonVariants = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1, transition: {duration: 0.4}},
};

export default function BundleAddToCart() {
  const [bundle, setBundle] = useAtom(bundleAtom);
  const boxes = useAtomValue(boxesAtom);
  const selectedVariant = useAtomValue(selectedVariantAtom);
  const selectedBox = useAtomValue(selectedBoxAtom);
  const {setCartOpen} = useOpenStore();
  const quantity = useAtomValue(bundleQuantityAtom);
  const subscription = useAtomValue(subscriptionAtom);
  const [sellingPlanId, setSellingPlanId] = useState(
    selectedBox?.sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id,
  );
  const [packaging, setPackaging] = useState(selectedBox?.title);

  useEffect(() => {
    if (!selectedBox) return;
    setSellingPlanId(
      selectedBox?.sellingPlanGroups.nodes[subscription ? 1 : 0]?.sellingPlans
        .nodes[0]?.id,
    );
    setPackaging(selectedBox?.id == boxes[0].id ? 'Standard' : 'Luxury');
  }, [selectedBox, subscription]);

  if (!selectedBox || !selectedVariant) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
      className="px-8"
      onClick={() => {
        if (quantity != MAX_QUANTITY) return;
        setCartOpen(true);
      }}
    >
      <AddToCartButton
        disabled={
          !selectedVariant ||
          !selectedVariant.availableForSale ||
          quantity != MAX_QUANTITY
        }
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  sellingPlanId,
                  quantity: 1,
                  attributes: [
                    {
                      key: 'Order Details',
                      value: getOrderDetails(bundle),
                    },
                    {
                      key: 'Order Packaging',
                      value: packaging ?? 'err: no packaging selected',
                    },
                    {
                      key: 'Order Type',
                      value: subscription ? 'Subscription' : 'One-time',
                    },
                  ],
                  selectedVariant,
                },
              ]
            : []
        }
      >
        <motion.div variants={buttonVariants}>
          <Button
            variant="green"
            className={cn(
              'p-size mt-4',
              quantity != MAX_QUANTITY && 'bg-red-500/50',
            )}
            disabled={quantity != MAX_QUANTITY}
          >
            {quantity == MAX_QUANTITY
              ? `Add to cart €${
                  subscription
                    ? (parseFloat(selectedVariant.price.amount) * 0.8).toFixed(
                        2,
                      )
                    : parseFloat(selectedVariant.price.amount).toFixed(2)
                }`
              : 'Add more cookies'}
          </Button>
        </motion.div>
      </AddToCartButton>
    </motion.div>
  );
}
