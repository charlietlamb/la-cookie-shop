import {Separator} from '~/components/ui/separator';
import {Feature} from './featuresData';
import {motion, useMotionValueEvent} from 'framer-motion';
import {useFeaturesContext} from './context';
import {useState} from 'react';
export default function FeaturesFeature({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const {scrollY} = useFeaturesContext();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (value) => {
    if (value > index * 100) {
      setShow(true);
    }
  });
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-full gap-4"
      initial={{opacity: 0, x: -50}}
      animate={{
        opacity: show ? 1 : 0,
        x: show ? 0 : -50,
      }}
      transition={{duration: 0.6}}
    >
      {feature.icon}
      <div className="flex flex-col items-center">
        <h3 className="font-silk h3-size capitalize">{feature.title}</h3>
        <Separator className="w-full mt-auto" />
        <p className="font-light text-center">{feature.description}</p>
      </div>
    </motion.div>
  );
}
