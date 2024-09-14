import {motion} from 'framer-motion';

export default function IndexCorporateImage() {
  return (
    <motion.div
      className="shadow-baseWhitew-full w-80 flex items-center justify-center mx-auto overflow-hidden"
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      <motion.img
        src="/images/cookie-candle.jpg"
        alt="cookies"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, delay: 0.2, ease: 'easeOut'}}
      />
    </motion.div>
  );
}
