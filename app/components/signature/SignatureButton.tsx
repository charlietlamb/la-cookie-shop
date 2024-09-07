import {motion} from 'framer-motion';
import {boxesAtom, BundleItem, MAX_QUANTITY} from '~/store/bundle';
import {Button} from '~/components/ui/button';
import {useAtomValue} from 'jotai';
import {AddToCartButton} from '~/components/AddToCartButton';
import {getOrderDetails} from '~/functions/getOrderDetails';
import {useOpenStore} from '~/store/open';
import {cn} from '~/lib/utils';
import {cookieData} from '~/data/cookieData';

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

export default function SignatureButton() {
  const boxes = useAtomValue(boxesAtom);
  let bundle: BundleItem[] = [];
  cookieData.forEach((cookie) => {
    bundle.push({cookie, quantity: 2});
  });
  const selectedVariant = boxes[0]?.variants.nodes[0];
  const selectedBox = boxes[0];
  const {setCartOpen} = useOpenStore();
  const quantity = 10;
  const subscription = false;
  const sellingPlanId =
    selectedBox?.sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id;
  const packaging = selectedBox?.title;
  if (!selectedBox || !selectedVariant) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
      className={cn('bundle w-full')}
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
            variant="actionDarkInverse"
            className={cn(
              'p-size',
              quantity != MAX_QUANTITY && 'bg-red-500/50',
            )}
            disabled={quantity != MAX_QUANTITY}
          >
            Add to cart €{parseFloat(selectedVariant.price.amount).toFixed(2)}
          </Button>
        </motion.div>
      </AddToCartButton>
    </motion.div>
  );
}
