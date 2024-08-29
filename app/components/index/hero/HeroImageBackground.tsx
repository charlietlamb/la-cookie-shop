import {motion} from 'framer-motion';

export default function HeroImageBackground() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      initial={{scale: 1.1}}
      animate={{
        x: [0, 25, -25, 0, 25, -25, 0],
        y: [0, 25, -25, 0, -25, 25, 0],
      }}
      transition={{
        duration: 60,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <img
        src="/images/cookie-mag-tea.jpeg"
        alt="hero"
        className="absolute w-full"
      />
    </motion.div>
  );
}
