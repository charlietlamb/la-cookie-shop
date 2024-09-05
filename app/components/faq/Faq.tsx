import {faqData} from './faqData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export default function Faq() {
  return (
    <div className="padding-main flex flex-col items-center gap-8 py-16">
      <h3 className="title-size font-silk text-center">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqData.data.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
