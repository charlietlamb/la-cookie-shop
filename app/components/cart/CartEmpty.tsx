import {useNavigate} from '@remix-run/react';
import {CartMainProps} from './CartMain';
import {useSetAtom} from 'jotai';
import {cartAtom} from '~/store/open';
import CookieButton from '../utils/CookieButton';
import {AnimatePresence, motion} from 'framer-motion';

export default function CartEmpty({
  hidden = false,
}: {
  hidden?: boolean;
  layout?: CartMainProps['layout'];
}) {
  const setCartOpen = useSetAtom(cartAtom);
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: 0.3, duration: 0.6}}
          className="flex flex-col gap-4"
        >
          <p className="font-light">
            Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
            started!
          </p>
          <CookieButton
            variant="actionSand"
            className="w-full"
            onClick={() => {
              setCartOpen(false);
              navigate('/bundle');
            }}
          >
            Curate an assortment
          </CookieButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
