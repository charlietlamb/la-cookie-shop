import {motion} from 'framer-motion';

export default function StoryCommunity() {
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 1.8}}
      className="bg-green w-full py-16 text-white"
    >
      <div className="padding-main">
        <h3 className="font-silk mb-6 text-3xl text-center">Our Community</h3>
        <div className="md:flex-row flex flex-col items-start gap-8">
          <motion.img
            src="/images/cookie-bowl.jpeg"
            alt="Community Events"
            className="md:w-1/3 w-full rounded-lg shadow-lg"
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 2.1}}
          />
          <motion.div
            className="md:w-2/3 w-full"
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 2.4}}
          >
            <p className="mb-4 text-lg font-light">
              At La Cookie Shop, we believe that cookies have the power to bring
              people together. That's why we're deeply committed to fostering a
              sense of community, both within our shops and in the neighborhoods
              we serve. Our stores are designed to be more than just places to
              buy cookies; they're gathering spots where people can connect,
              share stories, and create memories.
            </p>
            <p className="mb-4 text-lg font-light">
              We regularly host events that celebrate our community and our
              shared love of great food. From cookie decorating workshops for
              children to pairing events that match our cookies with local wines
              and cheeses, there's always something happening at La Cookie Shop.
              These events not only allow us to share our passion with our
              customers but also give us the opportunity to learn from them and
              gather inspiration for new creations.
            </p>
            <p className="text-lg font-light">
              Our commitment to community extends beyond our stores. We actively
              participate in local events, sponsor community initiatives, and
              partner with local schools and organizations. Whether it's
              donating cookies for a charity bake sale or teaching a baking
              class at a local school, we're always looking for ways to give
              back to the communities that have welcomed us so warmly.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
