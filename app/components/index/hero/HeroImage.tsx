import {ArrowDown} from 'lucide-react';
import {motion} from 'framer-motion';
import {RefObject, useEffect} from 'react';

export default function HeroImage({
  infoRef,
}: {
  infoRef: RefObject<HTMLDivElement>;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.2}}
      className="md:w-[400px] w-[300px] aspect-square flex items-center justify-center absolute -bottom-[100px] z-10 overflow-hidden rounded-full"
    >
      <div className="bg-black/10 absolute inset-0" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end py-8">
        <div
          onClick={() => infoRef.current?.scrollIntoView({behavior: 'smooth'})}
          className="hover:scale-95 flex flex-col items-center text-white transition-all cursor-pointer"
        >
          <p className="upper h4-size font-cardo">DISCOVER</p>
          <ArrowDown strokeWidth={1.5} className="size-8 flex-shrink-0" />
        </div>
      </div>
      <img
        src="/images/cookie-coffee-mag.jpeg"
        alt="La Cookie Shop Hero Image"
      />
    </motion.div>
  );
}
