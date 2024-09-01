import {motion} from 'framer-motion';

export default function AnimatedCheck({className}: {className?: string}) {
  return (
    <motion.svg
      fill="none"
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        initial={{pathLength: 0, opacity: 0}}
        animate={{pathLength: 1, opacity: 1}}
        exit={{pathLength: 0, opacity: 0}}
        transition={{duration: 0.6}}
        d="M12.8,28.7l-9.5-9.5c-0.4-0.4-0.4-1.1,0-1.6l1.5-1.5c0.4-0.4,1.1-0.4,1.6,0l7.2,7.2l16-16c0.4-0.4,1.1-0.4,1.6,0l1.5,1.5c0.4,0.4,0.4,1.1,0,1.6L14.4,28.7C13.9,29.1,13.2,29.1,12.8,28.7z"
        stroke="#5E452A"
        strokeWidth="2.0101"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
