import {motion} from 'framer-motion';
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

export default function BundleSelectionOption({
  cookie,
  index,
  className,
  disabled = false,
  small = false,
}: {
  cookie: CookieData;
  index: number;
  disabled?: boolean;
  small?: boolean;
  className?: string;
}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  const quantity = useAtomValue(bundleQuantityAtom);
  const setSelectedCookie = useSetAtom(selectedCookieAtom);

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-center w-full overflow-hidden cursor-pointer',
        cookieData.length % 2 === 1 &&
          cookieData[cookieData.length - 1].name === cookie.name &&
          'col-span-2',
        className,
      )}
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, delay: index * 0.1}}
      onClick={() => {
        if (disabled) return;
        setSelectedCookie(cookie);
        if (quantity >= MAX_QUANTITY) return;
        const newBundle = addToBundle(bundle, cookie);
        setBundle(newBundle);
      }}
    >
      <motion.div
        className="aspect-square flex items-center justify-center overflow-hidden"
        initial={{scale: 0.8}}
        whileInView={{scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: index * 0.1 + 0.2}}
      >
        <img width={small ? 100 : 150} src={cookie.image} alt={cookie.name} />
      </motion.div>
      <motion.h5
        className={cn('h4-size font-silk text-center', small && 'p-size')}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: index * 0.1 + 0.4}}
      >
        {cookie.name}
      </motion.h5>
      <motion.p
        className={cn('text-sm font-light text-center', small && 'text-xs')}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: index * 0.1 + 0.6}}
      >
        {cookie.ingredients.join(', ')}
      </motion.p>
    </motion.div>
  );
}
