import HeaderPopoverContentItem from '../popover/HeaderPopoverContentItem';
import HeaderMobileBack from './HeaderMobileBack';
import {motion} from 'framer-motion';
export default function HeaderMobileMenuMore() {
  return (
    <motion.div
      initial={{opacity: 0, x: -100}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}}
      transition={{duration: 0.6}}
      className="flex flex-col w-full gap-4 overflow-y-auto"
    >
      <HeaderMobileBack />
      <HeaderPopoverContentItem
        to="/our-story"
        title="Our story"
        image="/images/cookie-mag-tea.jpeg"
        index={0}
      />
      <HeaderPopoverContentItem
        to="/hostpitality"
        title="Hostpitality"
        image="/images/cookie-bowl-tea.jpeg"
        index={1}
      />
      <HeaderPopoverContentItem
        to="/corporate-gifting"
        title="Corporate"
        image="/images/cookie-hand.jpg"
        index={2}
      />
      <HeaderPopoverContentItem
        to="/blogs"
        title="Blog"
        image="/images/cookies-mag.jpeg"
        index={3}
      />
      <HeaderPopoverContentItem
        to="/contact"
        title="Contact"
        image="/images/cookie-bowl.jpeg"
        index={4}
      />
    </motion.div>
  );
}
