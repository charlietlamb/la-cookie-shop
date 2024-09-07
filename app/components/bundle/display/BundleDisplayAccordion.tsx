import {motion, AnimatePresence} from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import {selectedCookieAtom} from '~/store/bundle';
import {useAtomValue} from 'jotai';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.3}},
  exit: {opacity: 0, y: -20, transition: {duration: 0.3}},
};

export default function BundleDisplayAccordion() {
  const selectedCookie = useAtomValue(selectedCookieAtom);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCookie.name}
        className="md:px-8 w-full mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileInView="visible"
        viewport={{once: false, amount: 0.1}}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="ingredients">
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.3}}
            >
              <AccordionTrigger className="font-silk text-xl">
                Ingredients
              </AccordionTrigger>
              <AccordionContent>
                <motion.ul
                  className="text-dark pl-5 text-lg font-light list-disc"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.3}}
                >
                  {selectedCookie.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </motion.ul>
              </AccordionContent>
            </motion.div>
          </AccordionItem>
          <AccordionItem value="description">
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.3, delay: 0.1}}
            >
              <AccordionTrigger className="font-silk text-xl">
                Description
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  className="text-dark text-lg font-light"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.3}}
                >
                  {selectedCookie.description}
                </motion.p>
              </AccordionContent>
            </motion.div>
          </AccordionItem>
          <AccordionItem value="complement">
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.3, delay: 0.2}}
            >
              <AccordionTrigger className="font-silk text-xl">
                Complements
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  className="text-dark text-lg font-light"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.3}}
                >
                  {selectedCookie.complement}
                </motion.p>
              </AccordionContent>
            </motion.div>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </AnimatePresence>
  );
}
