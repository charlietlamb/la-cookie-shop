import {Cookie} from 'lucide-react';
import {cn} from '~/lib/utils';
import {motion} from 'framer-motion';

export default function NextSeason() {
  return (
    <div className="md:grid-cols-5 grid grid-cols-6">
      {Array.from({length: 5}).map((_, index) => (
        <motion.div
          key={index}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.6, delay: index * 0.1}}
          className={cn(
            'flex flex-col items-center justify-center w-full h-full col-span-2 md:col-span-1',
            index > 2 && 'col-span-3',
          )}
        >
          <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.6, delay: index * 0.1 + 0.3}}
          >
            <Cookie className="w-20 h-20" strokeWidth={1} />
          </motion.div>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.6, delay: index * 0.1 + 0.6}}
            className="font-silk text-xl"
          >
            ?
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
