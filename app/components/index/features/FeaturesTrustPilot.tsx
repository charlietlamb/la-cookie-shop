import {motion} from 'framer-motion';
export default function FeaturesTrustPilot() {
  return (
    <motion.div
      className="flex items-center justify-center w-full gap-4"
      initial={{opacity: 0, y: 50}}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{duration: 0.6, delay: 0.6}}
    >
      <img src="/trust/5star.svg" alt="Trustpilot" width={200} height={100} />
      <img src="/trust/trust.png" alt="Trustpilot" width={150} height={100} />
    </motion.div>
  );
}
