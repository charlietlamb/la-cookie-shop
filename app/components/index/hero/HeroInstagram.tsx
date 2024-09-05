import {FaInstagram} from 'react-icons/fa';
import {Separator} from '~/components/ui/separator';
import {motion} from 'framer-motion';

export default function HeroInstagram() {
  return (
    <motion.div
      className="bottom-40 text-dark w-60 -right-12 md:flex  absolute items-center hidden gap-2 -rotate-90 cursor-pointer"
      initial={{opacity: 0, y: 100, rotate: -90}}
      animate={{opacity: 1, y: 0, rotate: -90}}
      transition={{duration: 1, delay: 0.2}}
    >
      <Separator className="bg-green flex-grow w-auto" />
      <p className="font-light uppercase">Visit us at</p>
      <FaInstagram strokeWidth={1.5} />
    </motion.div>
  );
}
