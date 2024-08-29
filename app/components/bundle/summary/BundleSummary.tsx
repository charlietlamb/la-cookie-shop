import {useAtomValue} from 'jotai';
import {
  bundleAtom,
  bundleQuantityAtom,
  individualItemsAtom,
  MAX_QUANTITY,
} from '~/store/bundle';
import BundleSummaryItem from './BundleSummaryItem';
import BundleSummaryHeader from './BundleSummaryHeader';
import {useEffect, useRef} from 'react';
import autoAnimate from '@formkit/auto-animate';
import BundleSummaryItemSkeleton from './BundleSummaryItemSkeleton';

export default function BundleSummary() {
  const individualItems = useAtomValue(individualItemsAtom);
  const parent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  const maxArray = Array.from({length: MAX_QUANTITY}, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4 mt-4" ref={parent}>
      <BundleSummaryHeader />
      <div className="grid grid-cols-5 gap-4 p-4 bg-white rounded-lg">
        {maxArray.map((_, i) => {
          if (i >= individualItems.length)
            return <BundleSummaryItemSkeleton key={i} />;
          return <BundleSummaryItem key={i} item={individualItems[i]} />;
        })}
      </div>
    </div>
  );
}
