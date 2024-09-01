import {AnimatePresence, motion} from 'framer-motion';
import {useAtom, useAtomValue} from 'jotai';
import {Check, Gift, Plus} from 'lucide-react';
import AnimatedCheck from '~/components/utils/AnimatedCheck';
import {cn} from '~/lib/utils';
import {boxesAtom, selectedBoxAtom} from '~/store/bundle';

export default function BundlePackaging() {
  const boxes = useAtomValue(boxesAtom);
  const [selectedBox, setSelectedBox] = useAtom(selectedBoxAtom);
  if (!selectedBox) return null;

  return (
    <div
      className={cn(
        'flex gap-2 items-center p-2 rounded-lg border border-green bg-white cursor-pointer hover:border-greenDark transition-all duration-300',
        selectedBox.id === boxes[1].id && 'border-greenDark',
      )}
      onClick={() => {
        if (selectedBox.id === boxes[1].id) {
          setSelectedBox(boxes[0]);
        } else {
          setSelectedBox(boxes[1]);
        }
      }}
    >
      <Gift
        strokeWidth={1}
        className={cn(
          'flex-shrink-0 w-10 h-10 transition-colors duration-1000',
          selectedBox.id === boxes[1].id && 'text-pink',
        )}
      />
      <div className=" flex flex-col w-full gap-1 pr-2">
        <div className="flex items-center justify-between w-full">
          <h5 className="font-silk text-lg font-bold leading-none uppercase">
            Luxury Packaging
          </h5>
          <AnimatePresence>
            {selectedBox.id === boxes[0].id ? (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.6}}
                className="flex items-center"
              >
                <Plus strokeWidth={1} className="flex-shrink-0 w-5 h-5 mb-1" />
                <p className="font-silk">
                  €
                  {parseFloat(boxes[1].variants.nodes[0].price.amount) -
                    parseFloat(boxes[0].variants.nodes[0].price.amount)}
                </p>
              </motion.div>
            ) : (
              <AnimatedCheck className="text-pink flex-shrink-0 w-6 h-6" />
            )}
          </AnimatePresence>
        </div>
        <p className="text-sm font-light leading-none">
          Add luxury gift packaging to your bundle.
        </p>
      </div>
    </div>
  );
}
