import {bundleAtom} from '~/store/bundle';
import {Trash2} from 'lucide-react';
import {removeFromBundle} from '~/functions/removeFromBundle';
import {useAtom, useAtomValue} from 'jotai';
import {CookieData} from '~/data/cookieData';

export default function BundleSummaryItem({item}: {item: CookieData}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  return (
    <div className="aspect-square relative flex items-center justify-center overflow-hidden">
      <div className="group absolute inset-0 flex items-center justify-center p-4">
        <Trash2
          className="group-hover:flex hidden text-red-500 transition-all cursor-pointer"
          onClick={() => {
            const newBundle = removeFromBundle(bundle, item);
            setBundle(newBundle);
          }}
        />
      </div>
      <img src={item.image} alt={item.name} width={100} height={100} />
    </div>
  );
}
