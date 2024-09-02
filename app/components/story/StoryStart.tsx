import {motion} from 'framer-motion';

export default function StoryStart() {
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.3}}
      className="md:flex-row padding-main flex flex-col items-start gap-12"
    >
      <motion.img
        src="/images/cookie-mag-tea.jpeg"
        alt="La Cookie Shop Story"
        className="md:w-1/3 w-full rounded-lg shadow-lg"
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1, delay: 0.6}}
      />
      <motion.div
        className="md:w-2/3 w-full"
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1, delay: 0.9}}
      >
        <h3 className="font-silk text-green mb-4 text-3xl">Our Beginnings</h3>
        <p className="mb-4 text-lg font-light">
          La Cookie Shop's journey began in a small Parisian kitchen, where our
          founder, Marie, experimented with combining classic American cookie
          recipes with refined European patisserie techniques. Inspired by her
          travels and culinary training, Marie set out to create cookies that
          were not just treats, but experiences.
        </p>
        <p className="mb-4 text-lg font-light">
          What started as a passion project quickly gained a following. Word
          spread about these unique cookies that offered the comforting
          familiarity of American classics with the elegance and complexity of
          French pastries. Before long, La Cookie Shop had outgrown Marie's
          kitchen and found its first home in a charming storefront in the heart
          of Paris.
        </p>
        <p className="text-lg font-light">
          Today, La Cookie Shop has grown into a beloved brand with multiple
          locations across Europe, but our commitment to quality, innovation,
          and the simple joy of a perfect cookie remains unchanged. Each bite is
          a testament to our journey and the fusion of cultures that inspired
          our creation.
        </p>
      </motion.div>
    </motion.section>
  );
}
