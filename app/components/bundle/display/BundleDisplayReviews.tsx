import {useAtomValue} from 'jotai';
import {selectedCookieAtom} from '~/store/bundle';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, useEffect} from 'react';

const reviewVariants = {
  enter: {opacity: 0},
  center: {opacity: 1},
  exit: {opacity: 0},
};

export default function BundleDisplayReviews() {
  const selectedCookie = useAtomValue(selectedCookieAtom);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(
        (prevIndex) => (prevIndex + 1) % selectedCookie.reviews.length,
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [selectedCookie.reviews.length]);

  return (
    <motion.div
      className="mt-4 bg-white rounded-none"
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
    >
      <h3 className="font-cardo mb-4 text-xl text-center">
        What Our Customers Think
      </h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentReviewIndex}
          variants={reviewVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{duration: 1}}
          className="px-2"
        >
          <div className="flex flex-col p-3 rounded-none">
            <p className="font-cardo mb-2 font-medium">
              {selectedCookie.reviews[currentReviewIndex].name}
            </p>
            <p className="text-sm">
              {selectedCookie.reviews[currentReviewIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
