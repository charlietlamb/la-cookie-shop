import {motion} from 'framer-motion';
import {faqData} from './faqData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export default function Faq() {
  return (
    <motion.div
      className="padding-main flex flex-col items-center gap-8 py-16"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      <motion.h3
        className="title-size font-cardo text-center"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
      >
        Frequently Asked Questions
      </motion.h3>
      <motion.div
        className="w-full"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: 'easeOut', delay: 0.4}}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqData.data.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.6 + index * 0.1,
              }}
            >
              <AccordionItem value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
