import {Cookie} from 'lucide-react';
import {motion} from 'framer-motion';
import {cn} from '~/lib/utils';

const itemVariants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1, transition: {duration: 0.4}},
};
export default function BundleSummaryItemSkeleton() {
  return (
    <motion.div variants={itemVariants}>
      <Cookie className="animate-pulse w-full h-full p-4" strokeWidth={0.5} />
    </motion.div>
  );
}
