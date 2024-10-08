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
  hero = false,
}: {
  cookie: CookieData;
  index: number;
  disabled?: boolean;
  small?: boolean;
  className?: string;
  hero?: boolean;
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
        if (hero) {
          const targetElement = document.getElementById(
            `cookie-${cookie.name}`,
          );
          if (targetElement) {
            targetElement.classList.add('scroll-mt-[100px]');
            targetElement.scrollIntoView({
              behavior: 'smooth',
            });
            // Optionally remove the class after scrolling
            setTimeout(
              () => targetElement.classList.remove('scroll-mt-[100px]'),
              1000,
            );
          }
          return;
        }
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
        <img width={small ? 120 : 150} src={cookie.image} alt={cookie.name} />
      </motion.div>
      <motion.h5
        className={cn('h4-size font-cardo text-center')}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: index * 0.1 + 0.4}}
      >
        {cookie.name}
      </motion.h5>
      <motion.p
        className={cn('font-light text-center hidden md:flex')}
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
