import {motion} from 'framer-motion';

export default function InfoText() {
  return (
    <motion.div
      className="flex flex-col w-full gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      transition={{staggerChildren: 0.2}}
    >
      <motion.h2
        className="font-silk title-size text-xl text-white"
        variants={{
          hidden: {opacity: 0, y: 20},
          visible: {opacity: 1, y: 0},
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        Where American Baking Meets French Artistry
      </motion.h2>
      <motion.p
        className="text-lg font-light text-white"
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
    </motion.div>
  );
}
