import {useAtomValue} from 'jotai';
import {CalendarCheck, CalendarClock, Home} from 'lucide-react';
import React from 'react';
import {subscriptionAtom} from '~/store/bundle';

export default function BundlePlanDetails() {
  const subscription = useAtomValue(subscriptionAtom);
  return (
    <div className="rounded-t-xl bg-light divide-dark flex items-center w-full px-8 py-4 divide-x">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center gap-2">
          <CalendarCheck strokeWidth={1} />
          <h5 className="font-light">Today's order</h5>
        </div>
        <p className="font-cardo">Delivered in 2-3 days</p>
      </div>
      {subscription && (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center gap-2">
            <CalendarClock strokeWidth={1} />
            <h5 className="font-light">Next delivery</h5>
          </div>
          <p className="font-cardo">Delivered 4 weeks later</p>
        </div>
      )}
    </div>
  );
}
