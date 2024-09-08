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
        className="md:w-1/3 w-full rounded-none shadow-lg"
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
        <h3 className="font-cardo text-sand mb-4 text-3xl">Our Beginnings</h3>
        <p className="mb-4 text-lg font-light">
          La Cookie Shop was founded on the idea that a cookie can be more than
          just a treat—it can be a luxurious experience. This vision first took
          shape during a trip to Paris when Britt encountered the famous Ispahan
          dessert by Pierre Hermé. The delicate blend of rose, raspberries, and
          lychee inspired Britt to reimagine these refined flavors in a more
          accessible format. Why couldn't such an elegant dessert be enjoyed on
          the go, without the need for a knife and fork?
        </p>
        <p className="mb-4 text-lg font-light">
          Returning home to Lisbon, Britt set out to create a cookie that would
          embody the same sophistication and bold flavors as the Ispahan
          dessert, but with the satisfying chew and convenience of an
          American-style cookie. The result was the Rose Berry cookie—a
          delectable fusion of rose, strawberries, raspberries, and
          lychee-infused white chocolate, encapsulating the perfect balance of
          elegance and comfort.
        </p>
        <p className="text-lg font-light">
          This was just the beginning. At La Cookie Shop, Britt continues to
          push the boundaries of flavor, crafting cookies that are not only
          delicious but also thoughtful, innovative, and deeply inspired by her
          love of luxury and gourmet cuisine.
        </p>
      </motion.div>
    </motion.section>
  );
}
