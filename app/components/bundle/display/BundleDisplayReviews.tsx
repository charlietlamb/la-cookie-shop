import {useAtomValue} from 'jotai';
import {selectedCookieAtom} from '~/store/bundle';
import {motion, AnimatePresence} from 'framer-motion';
import {Star} from 'lucide-react';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {opacity: 0, y: -20, transition: {duration: 0.3}},
};

const itemVariants = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0},
};

export default function BundleDisplayReviews() {
  const selectedCookie = useAtomValue(selectedCookieAtom);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCookie.name}
        className="px-2 mt-4 bg-white rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileInView="visible"
        viewport={{once: false, amount: 0.1}}
      >
        <motion.h3
          className="font-silk text-green mb-4 text-xl text-center"
          variants={itemVariants}
        >
          What Our Customers Think
        </motion.h3>
        <motion.div className="px-2 space-y-3" variants={containerVariants}>
          {selectedCookie.reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-greenLight p-3 rounded-md"
              variants={itemVariants}
              transition={{duration: 0.3}}
            >
              <div className="flex items-center mb-2">
                <p className="mr-2 font-medium">{review.name}</p>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm">{review.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
