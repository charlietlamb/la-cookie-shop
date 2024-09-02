import {motion, AnimatePresence} from 'framer-motion';
import {useAtom, useAtomValue} from 'jotai';
import {bundleAtom, selectedCookieAtom} from '~/store/bundle';

export default function BundleDisplayImage() {
  const selectedCookie = useAtomValue(selectedCookieAtom);

  return (
    <AnimatePresence mode="wait">
      {selectedCookie && (
        <motion.img
          key={selectedCookie.name}
          src={selectedCookie.image}
          alt={selectedCookie.name}
          className="z-10 object-contain w-full"
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.8}}
          transition={{duration: 0.3}}
        />
      )}
    </AnimatePresence>
  );
}
