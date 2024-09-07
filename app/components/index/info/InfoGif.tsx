import {motion} from 'framer-motion';

export default function InfoGif() {
  return (
    <motion.div
      className="shadow-baseWhite lg:w-2/3 w-full overflow-hidden rounded-none"
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      <motion.img
        src="/gifs/gif1.gif"
        alt="gif"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, delay: 0.2, ease: 'easeOut'}}
      />
    </motion.div>
  );
}
