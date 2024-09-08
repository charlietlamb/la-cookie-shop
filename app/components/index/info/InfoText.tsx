import {useNavigate} from '@remix-run/react';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';

export default function InfoText() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col w-full h-full gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      transition={{staggerChildren: 0.2}}
    >
      <motion.h2
        className="font-cardo title-size text-xl"
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        Where American
        <br /> Baking Meets
        <br /> French Pastry <br /> Artistry
      </motion.h2>
      <motion.p
        className="text-xl font-light"
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
      </motion.p>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
        className="mt-auto"
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
