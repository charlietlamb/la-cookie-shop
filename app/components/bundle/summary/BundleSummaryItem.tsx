import {motion} from 'framer-motion';
import {bundleAtom} from '~/store/bundle';
import {Trash2} from 'lucide-react';
import {removeFromBundle} from '~/functions/removeFromBundle';
import {useAtom, useAtomValue} from 'jotai';
import {CookieData} from '~/data/cookieData';
import {cn} from '~/lib/utils';

const itemVariants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1, transition: {duration: 0.4}},
};

export default function BundleSummaryItem({item}: {item: CookieData}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  return (
    <motion.div
      className={cn(
        'aspect-square relative flex items-center justify-center overflow-hidden',
      )}
      variants={itemVariants}
    >
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
    </motion.div>
  );
}
