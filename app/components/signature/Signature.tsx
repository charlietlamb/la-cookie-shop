import {motion} from 'framer-motion';
import SignatureButton from './SignatureButton';
import SignatureGif from './SignatureGif';
import SignatureGifText from './SignatureGifText';
import SignatureText from './SignatureText';

const containerVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
};

export default function Signature() {
  return (
    <motion.div
      className="padding-main relative flex flex-col py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      <motion.div variants={itemVariants}>
        <SignatureText />
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-start w-full gap-4 pt-4"
        variants={itemVariants}
      >
        <SignatureButton />
        <motion.div variants={itemVariants}>
          <SignatureGifText />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
