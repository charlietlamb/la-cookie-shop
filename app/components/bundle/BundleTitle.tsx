import {motion} from 'framer-motion';
import {Separator} from '../ui/separator';

export default function BundleTitle() {
  return (
    <motion.div
      className="flex flex-col gap-2 px-8"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6}}
    >
      <motion.h2
        className="text-dark font-silk h2-size text-center"
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        Create Your Bespoke Cookie Box
      </motion.h2>
      <motion.h4
        className="p-size font-[200] text-center uppercase"
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.4}}
      >
        20% off when you subscribe
      </motion.h4>
    </motion.div>
  );
}
