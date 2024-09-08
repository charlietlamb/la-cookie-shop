import {AnimatePresence, motion} from 'framer-motion';
import {useAtom, useAtomValue} from 'jotai';
import {Gift, Plus} from 'lucide-react';
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group';
import AnimatedCheck from '~/components/utils/AnimatedCheck';
import {cn} from '~/lib/utils';
import {boxesAtom, selectedBoxAtom} from '~/store/bundle';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

const contentVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {opacity: 1, x: 0, transition: {duration: 0.4, delay: 0.2}},
};

export default function BundlePackaging() {
  const boxes = useAtomValue(boxesAtom);
  const [selectedBox, setSelectedBox] = useAtom(selectedBoxAtom);
  if (!selectedBox) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      className={cn(
        'flex gap-2 flex-col items-center mx-8 p-2 py-4 rounded-none border border-sand bg-white cursor-pointer transition-all duration-300',
      )}
      onClick={() => {
        if (selectedBox.id === boxes[1].id) {
          setSelectedBox(boxes[0]);
        } else {
          setSelectedBox(boxes[1]);
        }
      }}
    >
      <RadioGroup
        value={selectedBox.id}
        className="sm:grid-cols-2 grid w-full grid-cols-1"
      >
        <div
          className="sm:flex-col flex items-center justify-center gap-2"
          onClick={() => setSelectedBox(boxes[0])}
        >
          <div className="flex items-center justify-center w-40 h-24 overflow-hidden">
            <img src="/packaging/basic.png" alt="basic" />
          </div>
          <RadioGroupItem
            className="text-sand border-sand"
            value={boxes[0].id}
            id={boxes[0].id}
          />
        </div>
        <div
          className="sm:flex-col flex items-center justify-center gap-2"
          onClick={() => setSelectedBox(boxes[1])}
        >
          <div className="flex items-center justify-center w-40 h-24 overflow-hidden">
            <img src="/packaging/luxury.png" alt="luxury" />
          </div>
          <RadioGroupItem
            className="text-sand border-sand"
            value={boxes[1].id}
            id={boxes[1].id}
          />
        </div>
      </RadioGroup>
      <div className="flex items-center justify-center gap-2">
        <p className="font-cardo text-md leading-none text-center">
          Limited Edition Packaging (+€12)
        </p>
        <AnimatePresence>
          {selectedBox.id === boxes[1].id && (
            <AnimatedCheck className="flex-shrink-0 w-5 h-5" />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
