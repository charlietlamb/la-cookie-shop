import {useAtom, useAtomValue} from 'jotai';
import {
  boxesAtom,
  bundleAtom,
  bundleQuantityAtom,
  bundleSelectedAtom,
  MAX_GRANDE_QUANTITY,
  MAX_PETITE_QUANTITY,
  PETITE_BOX_ID,
  selectedBoxAtom,
} from '~/store/bundle';
import {Separator} from '../ui/separator';
import {addToBundle} from '~/functions/addToBundle';
import {useEffect} from 'react';
import CookieButton from '../utils/CookieButton';

export default function jBundleSelectionDetails() {
  const bundleSelected = useAtomValue(bundleSelectedAtom);
  const [bundle, setBundle] = useAtom(bundleAtom);
  const [selectedBox, setSelectedBox] = useAtom(selectedBoxAtom);
  const boxes = useAtomValue(boxesAtom);
  const petite = selectedBox?.id === PETITE_BOX_ID;
  const quantity = useAtomValue(bundleQuantityAtom);
  useEffect(() => {
    if (quantity > 5 && petite) setSelectedBox(boxes[1]);
    else if (!petite && quantity === 5) setSelectedBox(boxes[0]);
  }, [quantity]);
  return (
    <div className="flex flex-col flex-grow h-full pb-4">
      <h4 className="h1-size font-silk text-sand flex-shrink-0 font-medium leading-none uppercase">
        {bundleSelected.name}
      </h4>
      <Separator className="mt-1 mb-3 bg-white" />
      <div className="flex">
        <div className="flex flex-col w-full">
          <p className="font-[200] md:leading-none leading-snug md:text-lg font-inter text-white">
            {bundleSelected.description}
          </p>
        </div>
      </div>
      <CookieButton
        variant="actionSand"
        className="group p-text w-full mt-2 mt-auto overflow-hidden"
        disabled={quantity >= MAX_GRANDE_QUANTITY}
        onClick={() => {
          const newBundle = addToBundle(bundle, bundleSelected);
          setBundle(newBundle);
        }}
      >
        Add to your assortment
      </CookieButton>
    </div>
  );
}
