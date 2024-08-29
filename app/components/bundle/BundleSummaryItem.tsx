import {
  bundleAtom,
  BundleItem,
  bundleQuantityAtom,
  isPetiteBoxSelectedAtom,
  MAX_GRANDE_QUANTITY,
  MAX_PETITE_QUANTITY,
} from '~/store/bundle';
import {Button} from '../ui/button';
import {Minus, Plus} from 'lucide-react';
import {removeFromBundle} from '~/functions/removeFromBundle';
import {useAtom, useAtomValue} from 'jotai';
import {addToBundle} from '~/functions/addToBundle';

export default function BundleSummaryItem({item}: {item: BundleItem}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  const quantity = useAtomValue(bundleQuantityAtom);
  return (
    <div className="border-sand min-h-20 flex items-center gap-4 overflow-hidden border">
      <div className="border-sand flex items-center justify-center w-20 h-20 border">
        <img src={item.cookie.image} alt={item.cookie.name} />
      </div>
      <div className="flex flex-col">
        <p className="font-silk text-lg">{item.cookie.name}</p>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            className="p-0"
            size="auto"
            onClick={() => {
              const newBundle = removeFromBundle({bundle, cookie: item.cookie});
              setBundle(newBundle);
            }}
          >
            <Minus />
          </Button>
          <p className="font-silk text-lg">{item.quantity}</p>
          <Button
            variant="ghost"
            className="p-0"
            size="auto"
            disabled={quantity >= MAX_GRANDE_QUANTITY}
            onClick={() => {
              const newBundle = addToBundle(bundle, item.cookie);
              setBundle(newBundle);
            }}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
