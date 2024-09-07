import {MotionValue, useSpring, useTransform} from 'framer-motion';
import {motion, useScroll} from 'framer-motion';
import {useFeaturesContext} from './context';

export default function FeaturesCookieLeft() {
  const {scrollY} = useFeaturesContext();
  const bottomValue = useTransform(() => scrollY.get() / 2.5);

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <motion.img
      src="/cookies/RoseBerry.png"
      alt="Chocolate Truffle"
      className="left-4 md:block absolute z-20 hidden"
      width={100}
      height={100}
      style={{
        bottom: bottomValue,
        opacity: opacity, // Add opacity to the style
      }}
    />
  );
}
