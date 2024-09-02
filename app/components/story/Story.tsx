import {motion, AnimatePresence} from 'framer-motion';
import {Separator} from '~/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

import {Button} from '~/components/ui/button';
import StoryTabs from './StoryTabs';
import StoryStart from './StoryStart';
import StoryHeading from './StoryHeading';
import StoryValues from './StoryValues';
import StoryCommunity from './StoryCommunity';
import StoryJourney from './StoryJourney';

export default function Story() {
  return (
    <div className="py-8 bg-white">
      <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.2, ease: 'easeOut'}}
        className="flex flex-col items-center gap-16"
      >
        <StoryHeading />
        <StoryStart />
        <StoryTabs />
        <StoryValues />
        <StoryCommunity />
        <StoryJourney />
      </motion.div>
    </div>
  );
}
