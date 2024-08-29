import {
  bundleAtom,
  bundleQuantityAtom,
  isPetiteBoxSelectedAtom,
  MAX_GRANDE_QUANTITY,
  MAX_PETITE_QUANTITY,
  selectedBoxAtom,
} from '~/store/bundle';
import {Button} from '../ui/button';
import {useAtomValue, useSetAtom} from 'jotai';
import {AddToCartButton} from '../AddToCartButton';
import {cartAtom} from '~/store/open';
import {getOrderDetails} from '~/functions/getOrderDetails';

export default function BundleAddToCart() {
  const bundle = useAtomValue(bundleAtom);
  const selectedVariant = useAtomValue(selectedBoxAtom);
  const setCartOpen = useSetAtom(cartAtom);
  const isPetiteBoxSelected = useAtomValue(isPetiteBoxSelectedAtom);
  const quantity = useAtomValue(bundleQuantityAtom);

  return (
    <AddToCartButton
      disabled={!selectedVariant || !selectedVariant.availableForSale}
      onClick={() => {
        setCartOpen(true);
      }}
      lines={
        selectedVariant
          ? [
              {
                merchandiseId: selectedVariant.id,
                quantity: 1,
                attributes: [
                  {
                    key: 'Order Details',
                    value: getOrderDetails(bundle),
                  },
                ],
                selectedVariant,
              },
            ]
          : []
      }
    >
      <Button
        variant="actionSandInverse"
        className="p-size mt-4"
        disabled={
          bundle.length === 0 ||
          (isPetiteBoxSelected && quantity != MAX_PETITE_QUANTITY) ||
          (!isPetiteBoxSelected && quantity != MAX_GRANDE_QUANTITY)
        }
      >
        Add to cart
      </Button>
    </AddToCartButton>
  );
}
