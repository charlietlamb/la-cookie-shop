import HeaderMobileMenuOption from './HeaderMobileMenuOption';
import {motion} from 'framer-motion';

export default function HeaderMobileMenuSelect() {
  return (
    <motion.div
      initial={{opacity: 0, x: 100}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 100}}
      transition={{duration: 0.6}}
      className="flex flex-col w-full"
    >
      <HeaderMobileMenuOption to="/our-cookies">
        Our Cookies
      </HeaderMobileMenuOption>
      <HeaderMobileMenuOption to="/bundle">Bundle</HeaderMobileMenuOption>
      <HeaderMobileMenuOption to="/more" link={false}>
        More
      </HeaderMobileMenuOption>
      <HeaderMobileMenuOption to="/offers" link={false}>
        View Offers
      </HeaderMobileMenuOption>
    </motion.div>
  );
}
