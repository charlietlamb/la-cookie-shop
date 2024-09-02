import {useAtomValue} from 'jotai';
import {motion, AnimatePresence} from 'framer-motion';
import {
  bundleAtom,
  bundleQuantityAtom,
  individualItemsAtom,
  MAX_QUANTITY,
} from '~/store/bundle';
import BundleSummaryItem from './BundleSummaryItem';
import BundleSummaryHeader from './BundleSummaryHeader';
import {useEffect, useRef} from 'react';
import autoAnimate from '@formkit/auto-animate';
import BundleSummaryItemSkeleton from './BundleSummaryItemSkeleton';
import {cn} from '~/lib/utils';

const containerVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1},
  exit: {opacity: 0, scale: 0.8},
};

export default function BundleSummary() {
  const individualItems = useAtomValue(individualItemsAtom);
  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const maxArray = Array.from({length: MAX_QUANTITY}, (_, i) => i + 1);

  return (
    <motion.div
      className="flex flex-col gap-4 mt-4"
      ref={parent}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      <BundleSummaryHeader />
      <motion.div
        className="md:grid-cols-5 grid grid-cols-3 gap-4 p-4 bg-white rounded-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.1}}
      >
        <AnimatePresence initial={false}>
          {maxArray.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{duration: 0.3}}
            >
              {i >= individualItems.length ? (
                <BundleSummaryItemSkeleton />
              ) : (
                <BundleSummaryItem item={individualItems[i]} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
