import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {CookieData} from '~/data/cookieData';
import {cn} from '~/lib/utils';
import {bundleSelectedAtom} from '~/store/bundle';

export default function BundleSelectionOption({cookie}: {cookie: CookieData}) {
  const [bundleSelected, setBundleSelected] = useAtom(bundleSelectedAtom);
  return (
    <div
      className={cn(
        '!aspect-sqaure border-sand flex items-center justify-center w-full overflow-hidden border cursor-pointer',
        cookie.id === bundleSelected.id && 'border-emerald-500',
      )}
      onClick={() => setBundleSelected(cookie)}
    >
      <img
        src={cookie.image}
        alt={cookie.name}
        className="object-cover w-full h-full rounded-none"
      />
    </div>
  );
}
