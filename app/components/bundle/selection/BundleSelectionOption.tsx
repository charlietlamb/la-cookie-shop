import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {cookieData, CookieData} from '~/data/cookieData';
import {addToBundle} from '~/functions/addToBundle';
import {cn} from '~/lib/utils';
import {
  bundleAtom,
  bundleQuantityAtom,
  MAX_QUANTITY,
  selectedCookieAtom,
} from '~/store/bundle';

export default function BundleSelectionOption({cookie}: {cookie: CookieData}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  const quantity = useAtomValue(bundleQuantityAtom);
  const setSelectedCookie = useSetAtom(selectedCookieAtom);
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full overflow-hidden cursor-pointer',
        cookieData.length % 2 === 1 &&
          cookieData[cookieData.length - 1].name === cookie.name &&
          'col-span-2',
      )}
      onClick={() => {
        setSelectedCookie(cookie);
        if (quantity >= MAX_QUANTITY) return;
        const newBundle = addToBundle(bundle, cookie);
        setBundle(newBundle);
      }}
    >
      <div className="aspect-square flex items-center justify-center overflow-hidden">
        <img width={200} src={cookie.image} alt={cookie.name} />
      </div>
      <h5 className="h4-size font-silk">{cookie.name}</h5>
      <p className="text-sm font-light text-center">
        {cookie.ingredients.join(', ')}
      </p>
    </div>
  );
}
