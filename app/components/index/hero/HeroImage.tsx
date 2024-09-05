import {ArrowDown} from 'lucide-react';
import {motion} from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.2}}
      className="md:w-[400px] w-[300px] absolute -bottom-20 z-10 overflow-hidden rounded-t-full"
    >
      <div className="bg-green/40 absolute inset-0" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end py-8">
        <div className="hover:scale-95 flex flex-col items-center text-white transition-all cursor-pointer">
          <p className="upper p-size font-silk">DISCOVER</p>
          <ArrowDown strokeWidth={1.5} />
        </div>
      </div>
      <img src="/images/cookie-mag-tea.jpeg" alt="La Cookie Shop Hero Image" />
    </motion.div>
  );
}
