import {useSpring, useTransform} from 'framer-motion';
import {motion} from 'framer-motion';
import {useFeaturesContext} from './context';

export default function FeaturesCookieRight() {
  const {scrollY} = useFeaturesContext();
  const topValue = useTransform(() => scrollY.get() / 2.5);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  return (
    <motion.img
      src="/cookies/ChocolateTruffle.png"
      alt="Chocolate Truffle"
      className="right-4 md:block absolute z-20 hidden"
      width={100}
      height={100}
      style={{
        top: topValue,
        opacity: opacity,
      }}
    />
  );
}
