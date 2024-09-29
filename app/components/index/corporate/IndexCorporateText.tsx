import {useNavigate} from '@remix-run/react';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';
import {Separator} from '~/components/ui/separator';

export default function IndexCorporateText() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col justify-between flex-grow w-full h-full gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      transition={{staggerChildren: 0.2}}
    >
      <div>
        <motion.h2
          className="font-cardo sub-size text-xl"
          variants={{
            hidden: {opacity: 0, y: 20},
            visible: {opacity: 1, y: 0},
          }}
          transition={{duration: 0.6, ease: 'easeOut'}}
        >
          Exceptional Corporate Gifting
        </motion.h2>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: 'easeOut'}}
        >
          <Separator className="bg-dark mt-4" />
        </motion.div>
      </div>
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
        <br />
        <br />
        Our commitment to quality ensures that every bite is a delightful
        experience, making your gifting truly memorable. Each cookie is not only
        a treat for the taste buds but also a feast for the eyes, beautifully
        packaged to reflect the elegance of your brand.
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
