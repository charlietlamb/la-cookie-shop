import {MotionValue, useSpring, useTransform} from 'framer-motion';
import {motion} from 'framer-motion';
import {useFeaturesContext} from './context';

export default function FeaturesCookieLeft() {
  const {scrollY} = useFeaturesContext();
  const bottom = useSpring(scrollY);
  const bottomValue = useTransform(() => bottom.get() / 2.5);
  return (
    <motion.img
      src="/cookies/RoseBerry.png"
      alt="Chocolate Truffle"
      className="absolute left-0 z-20"
      width={100}
      height={100}
      style={{
        bottom: bottomValue,
      }}
    />
  );
}
