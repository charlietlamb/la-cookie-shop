import {motion} from 'framer-motion';

export default function HeroImageBackground() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{scale: 1.1}}
      animate={{
        x: [0, 100, -100, 0],
      }}
      transition={{
        duration: 120,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <img
        src="/images/cookie-mag-tea.jpeg"
        alt="hero"
        className="absolute h-full"
      />
    </motion.div>
  );
}
