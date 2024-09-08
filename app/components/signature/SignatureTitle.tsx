import {motion} from 'framer-motion';

export default function SignatureTitle() {
  return (
    <motion.h4
      className="font-cardo title-size text-dark"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      Rather Try Our Signature Box?
    </motion.h4>
  );
}
