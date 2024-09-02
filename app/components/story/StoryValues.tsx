import {motion} from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export default function StoryValues() {
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 1.5}}
      className="padding-main w-full"
    >
      <h3 className="font-silk text-dark mb-6 text-3xl text-center">
        Our Values
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-silk text-green">
            Quality Without Compromise
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 text-lg font-light">
              At La Cookie Shop, quality is not just a goal; it's our
              foundation. We believe that every cookie we create should be a
              testament to our commitment to excellence. This means never
              cutting corners, always using the best ingredients, and constantly
              refining our techniques.
            </p>
            <p className="text-lg font-light">
              Our dedication to quality extends beyond our products to every
              aspect of our business - from the way we train our staff to the
              partnerships we form with suppliers. We believe that when you
              prioritize quality in everything you do, excellence becomes not
              just an achievement, but a habit.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-silk text-green">
            Innovation Rooted in Tradition
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 text-lg font-light">
              We honor the rich traditions of both American and European baking,
              but we're not afraid to push boundaries. Our approach is to take
              the best of both worlds and create something entirely new. This
              philosophy of innovation rooted in tradition allows us to surprise
              and delight our customers while still offering the comfort of
              familiar flavors.
            </p>
            <p className="text-lg font-light">
              From developing new flavor combinations to experimenting with
              texture and presentation, we're always looking for ways to elevate
              the humble cookie. Our R&D team works tirelessly to bring fresh
              ideas to life, ensuring that there's always something new and
              exciting to discover at La Cookie Shop.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-silk text-green">
            Sustainability and Responsibility
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 text-lg font-light">
              We believe that great taste and responsible business practices go
              hand in hand. That's why sustainability is at the heart of
              everything we do at La Cookie Shop. From sourcing ingredients from
              local, sustainable farms to using eco-friendly packaging, we're
              committed to reducing our environmental impact.
            </p>
            <p className="text-lg font-light">
              But our commitment to responsibility goes beyond environmental
              concerns. We believe in fair trade practices and ensuring that
              everyone in our supply chain is treated ethically. We also strive
              to be a positive force in our local communities, participating in
              charitable events and supporting local initiatives. At La Cookie
              Shop, every cookie is a step towards a more sustainable and
              equitable future.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
}
