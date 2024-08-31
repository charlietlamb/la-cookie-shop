import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import HeaderLogo from './HeaderLogo';
import {HeaderMenuLeft} from './HeaderMenuLeft';
import {HeaderMenuRight} from './HeaderMenuRight';
import {useSetAtom} from 'jotai';
import {headerAtom} from '~/store/header';
import {useState} from 'react';
import {AnimatePresence, useScroll} from 'framer-motion';
import {useHeaderScroll} from './useHeaderScroll';
import {motion} from 'framer-motion';
import HeaderMobile from './mobile/HeaderMobile';
export function Header({
  isLoggedIn,
  cart,
}: {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
}) {
  const setHeaderKey = useSetAtom(headerAtom);
  const [show, setShow] = useState(true);
  const {scrollYProgress} = useScroll();
  useHeaderScroll(scrollYProgress, setShow);
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.header
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
            transition={{duration: 0.6}}
            className="padding-main backdrop-blur-sm bg-white/80 md:flex fixed top-0 z-50 items-center justify-center hidden w-full py-2"
            onMouseLeave={() => setHeaderKey(null)}
          >
            <HeaderMenuLeft />
            <HeaderLogo />
            <HeaderMenuRight cart={cart} isLoggedIn={isLoggedIn} />
          </motion.header>
          <HeaderMobile isLoggedIn={isLoggedIn} cart={cart} />
        </>
      )}
    </AnimatePresence>
  );
}
