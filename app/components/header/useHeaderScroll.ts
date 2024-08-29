import {MotionValue, useMotionValueEvent} from 'framer-motion';
import {SetStateAction} from 'jotai';
import {Dispatch, useState} from 'react';

export function useHeaderScroll(
  scrollYProgress: MotionValue<number>,
  setShow: Dispatch<SetStateAction<boolean>>,
) {
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const currentScrollY = latest * document.documentElement.scrollHeight;
    if (currentScrollY < lastScrollY) {
      // Scrolling up
      setShow(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down and not at the top
      setShow(false);
    }
    setLastScrollY(currentScrollY);
  });
}
