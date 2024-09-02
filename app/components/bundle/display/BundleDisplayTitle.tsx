import {motion} from 'framer-motion';
import {useAtomValue} from 'jotai';
import {selectedCookieAtom} from '~/store/bundle';

export default function BundleDisplayTitle() {
  const selectedCookie = useAtomValue(selectedCookieAtom);
  return (
    <motion.h2
      className="font-silk text-green hero-size mb-2 uppercase"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.2, duration: 0.3}}
    >
      {selectedCookie.name}
    </motion.h2>
  );
}
