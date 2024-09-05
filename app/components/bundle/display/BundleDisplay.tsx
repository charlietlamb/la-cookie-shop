import {AnimatePresence, motion} from 'framer-motion';
import BundleDisplayImage from './BundleDisplayImage';
import {selectedCookieAtom} from '~/store/bundle';
import {useAtomValue} from 'jotai';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import BundleDisplayAccordion from './BundleDisplayAccordion';
import BundleDisplayReviews from './BundleDisplayReviews';
import BundleDisplayTitle from './BundleDisplayTitle';

export default function BundleDisplay() {
  const selectedCookie = useAtomValue(selectedCookieAtom);

  return (
    <AnimatePresence mode="wait">
      {selectedCookie && (
        <motion.div
          className="md:sticky relative top-0 flex flex-col w-full h-full min-h-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <div className="pt-[60px] lg:pt-[72px] flex flex-col items-center xl:pt-[80px]">
            <BundleDisplayTitle />
            <motion.div
              className="aspect-square md:w-60 md:min-w-60 min-w-40 relative flex flex-col items-center justify-center flex-shrink-0 w-40 overflow-hidden"
              initial={{scale: 0.9}}
              whileInView={{scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
            >
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F3E8D2"
                  d="M41.9,-72.5C54.9,-66.2,66.2,-55.9,74.8,-43.1C83.4,-30.3,89.3,-15.1,89.8,0.3C90.3,15.7,85.4,31.4,76.6,44.3C67.8,57.2,55.1,67.3,41.3,74.1C27.5,80.9,13.8,84.4,-0.9,85.9C-15.5,87.4,-31,86.9,-44.5,80.5C-58,74.1,-69.5,61.8,-77.6,47.5C-85.7,33.2,-90.4,16.6,-90.1,0.2C-89.8,-16.3,-84.5,-32.5,-75.5,-46.2C-66.5,-59.9,-53.8,-71,-40,-76.4C-26.2,-81.8,-13.1,-81.4,0.6,-82.4C14.3,-83.4,28.9,-78.8,41.9,-72.5Z"
                  transform="translate(100 100)"
                />
              </svg>
              <BundleDisplayImage />
            </motion.div>
            <BundleDisplayAccordion />
            <BundleDisplayReviews />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
