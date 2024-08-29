import {useAtomValue} from 'jotai';
import {bundleAtom} from '~/store/bundle';
import BundleSummaryItem from './BundleSummaryItem';
import BundleSummaryHeader from './BundleSummaryHeader';
import {useEffect, useRef} from 'react';
import autoAnimate from '@formkit/auto-animate';

export default function BundleSummary() {
  const bundle = useAtomValue(bundleAtom);
  const parent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="flex flex-col gap-4 mt-4" ref={parent}>
      <BundleSummaryHeader />
      {bundle.map((item) => (
        <BundleSummaryItem key={item.cookie.id} item={item} />
      ))}
    </div>
  );
}
