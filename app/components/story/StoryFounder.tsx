import {motion} from 'framer-motion';
export default function StoryFounder() {
  return (
    <motion.div
      className="padding-main w-full"
      initial={{opacity: 0, x: 20}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1, delay: 0.9}}
    >
      <h3 className="font-silk text-sand mb-4 text-3xl">Our Founder</h3>
      <p className="mb-4 text-lg font-light">
        Britt Moore's journey to founding La Cookie Shop is rooted in her
        passion for luxury and gourmet cuisine. Before venturing into the
        culinary world, Britt built a successful career in fashion, working for
        Conde Nast and Interview Magazine, where she cultivated a refined taste
        for aesthetics and the finer things in life. Yet, her heart always
        belonged to the kitchen, and as a lifelong cook, baker, and food
        competition competitor, she gradually turned her focus toward her true
        passion: creating indulgent, artfully crafted desserts.
      </p>
      <p className="mb-4 text-lg font-light">
        Drawing from her dual love of fashion and gourmet food, Britt envisioned
        a way to merge these two worlds—resulting in the birth of La Cookie
        Shop, a brand that fuses rich flavors with visually stunning,
        meticulously crafted cookies.
      </p>
    </motion.div>
  );
}
