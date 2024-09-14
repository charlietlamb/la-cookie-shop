import {useNavigate} from '@remix-run/react';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';

export default function IndexCorporateText() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col flex-grow w-full h-full gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      transition={{staggerChildren: 0.2}}
    >
      <motion.h2
        className="font-cardo h1-size text-xl"
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        La Cookie Shop: Corporate Gifting
      </motion.h2>
      <motion.p
        className=" text-lg font-light"
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        Impress your clients, colleagues, and guests with the luxurious taste of
        La Cookie Shop. Our gourmet cookies make the perfect gift for corporate
        events, holiday celebrations, and special occasions. Each cookie is
        thoughtfully crafted to leave a lasting impression, combining elegance
        with indulgence. Whether you re looking for personalized gift boxes or a
        sweet addition to your event, our cookies are sure to delight.
      </motion.p>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        <Button
          variant="actionDarkInverse"
          size="black"
          onClick={() => navigate('/corporate')}
        >
          Corporate Gifting & Events
        </Button>
      </motion.div>
    </motion.div>
  );
}
