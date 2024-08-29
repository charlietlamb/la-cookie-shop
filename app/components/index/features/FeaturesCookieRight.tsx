import {useSpring, useTransform} from 'framer-motion';
import {motion} from 'framer-motion';
import {useFeaturesContext} from './context';

export default function FeaturesCookieRight() {
  const {scrollY} = useFeaturesContext();
  const top = useSpring(scrollY);
  const topValue = useTransform(() => top.get() / 2.5);
  return (
    <motion.img
      src="/cookies/ChocolateTruffle.png"
      alt="Chocolate Truffle"
      className="absolute right-0 z-20"
      width={100}
      height={100}
      style={{
        top: topValue,
      }}
    />
  );
}
