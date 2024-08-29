import {
  boxesAtom,
  bundleAtom,
  isPetiteBoxSelectedAtom,
  MAX_GRANDE_QUANTITY,
  MAX_PETITE_QUANTITY,
  selectedBoxAtom,
} from '~/store/bundle';
import {Button} from '../ui/button';
import {useAtomValue, useSetAtom} from 'jotai';
import {cn} from '~/lib/utils';
import {useEffect} from 'react';

export default function BundleVariants() {
  const setSelectedBox = useSetAtom(selectedBoxAtom);
  const boxes = useAtomValue(boxesAtom);
  const isPetiteBoxSelected = useAtomValue(isPetiteBoxSelectedAtom);
  const bundle = useAtomValue(bundleAtom);
  const quantity = bundle.reduce((acc, box) => acc + box.quantity, 0);

  useEffect(() => {
    if (quantity >= 5) setSelectedBox(boxes[1]);
  }, [boxes]);
  return (
    <div className="flex gap-4 mt-4">
      <Button
        className={cn(
          'hover:bg-sand/50 w-full hover:scale-y-1',
          isPetiteBoxSelected && 'hover:bg-sand hover:text-brown',
        )}
        variant={isPetiteBoxSelected ? 'actionSandInverse' : 'actionSand'}
        disabled={quantity > MAX_PETITE_QUANTITY}
        onClick={() => setSelectedBox(boxes[0])}
      >
        Petite: 5 Cookies
      </Button>
      <Button
        variant={isPetiteBoxSelected ? 'actionSand' : 'actionSandInverse'}
        className={cn(
          'hover:bg-sand/50 w-full hover:scale-y-1',
          !isPetiteBoxSelected && 'hover:bg-sand hover:text-brown',
        )}
        disabled={quantity > MAX_GRANDE_QUANTITY}
        onClick={() => setSelectedBox(boxes[1])}
      >
        Grande: 10 Cookies
      </Button>
    </div>
  );
}
