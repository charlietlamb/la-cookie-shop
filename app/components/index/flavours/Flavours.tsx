import SignatureGif from '~/components/signature/SignatureGif';
import FlavoursText from './FlavoursText';
import {motion} from 'framer-motion';

export default function Flavours() {
  return (
    <div className="bg-green padding-main md:flex-row flex flex-col items-center gap-4 py-16">
      <FlavoursText />
      <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        <SignatureGif />
      </motion.div>
    </div>
  );
}
