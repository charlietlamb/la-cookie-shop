import {motion} from 'framer-motion';

export default function BundleSummaryHeader() {
  return (
    <motion.h5
      className="h4-size font-cardo text-center uppercase"
      initial={{opacity: 0, y: -10}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4}}
    >
      Your bundle selection
    </motion.h5>
  );
}
