import {motion} from 'framer-motion';
import HeaderMobileLeft from './HeaderMobileLeft';
import HeaderLogo from '../HeaderLogo';
import {CartApiQueryFragment} from 'storefrontapi.generated';
import HeaderMobileRight from './HeaderMobileRight';

export default function HeaderMobile({
  isLoggedIn,
  cart,
}: {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
}) {
  return (
    <motion.header
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -100}}
      transition={{duration: 0.6}}
      className="padding-main backdrop-blur-sm bg-white/80 md:hidden fixed top-0 z-50 flex items-center justify-between w-full py-2"
    >
      <HeaderMobileLeft />
      <HeaderLogo />
      <HeaderMobileRight cart={cart} />
    </motion.header>
  );
}
