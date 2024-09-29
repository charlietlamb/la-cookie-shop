import {useNavigate} from '@remix-run/react';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';
import {Separator} from '~/components/ui/separator';

export default function InfoText() {
  const navigate = useNavigate();
  return (
    <motion.div
      className=" flex flex-col justify-between flex-grow w-full h-full min-h-full gap-4"
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
          American Baking Meets European Patisserie
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
        className="text-lg font-light leading-tight"
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        Our director of pastry is an American Paris-based pastry chef and a Le
        Cordon Bleu alumna, combining her American baking techniques with
        refined French pastry expertise. With her experience at The Ritz Paris
        and as a former pastry chef at Mariage Frères, she leads the charge in
        quality and execution at La Cookie Shop.
        <br />
        <br />
        Her passion for creating exquisite desserts is matched only by her
        commitment to using the finest ingredients. Each creation reflects her
        dedication to both tradition and innovation, ensuring that every bite is
        a delightful experience.
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
          onClick={() => navigate('/story')}
        >
          Our Story
        </Button>
      </motion.div>
    </motion.div>
  );
}
