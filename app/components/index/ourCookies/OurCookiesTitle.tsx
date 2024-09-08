import {motion} from 'framer-motion';
import {Separator} from '~/components/ui/separator';

export const separatorVariants = {
  hidden: {scaleX: 0},
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      delay: 0.3,
    },
  },
};

export default function OurCookiesTitle() {
  const titleVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="padding-main flex flex-col items-center w-full">
      <motion.h2
        className="font-cardo title-size font-medium leading-none uppercase"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        Our Cookies
      </motion.h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={separatorVariants}
        className="w-full"
      >
        <Separator className="bg-dark mb-2" />
      </motion.div>
    </div>
  );
}
