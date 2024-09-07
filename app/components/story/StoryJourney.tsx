import {useNavigate} from '@remix-run/react';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';

export default function StoryJourney() {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 2.7}}
      className="padding-main w-full"
    >
      <h3 className="font-silk text-sand mb-6 text-3xl text-center">
        Join Our Journey
      </h3>
      <p className="mb-6 text-lg font-light text-center">
        At La Cookie Shop, our story is still unfolding, and we want you to be
        part of it. Every cookie we create, every flavor we explore, and every
        new idea we bring to life is inspired by the joy we share with our
        customers. Whether you're indulging in our classic creations or
        discovering a new flavor profile for the first time, you're joining us
        in a journey of culinary exploration and creativity.
      </p>
      <p className="mb-8 text-lg font-light text-center">
        We invite you to follow along as we continue to push the limits of what
        a cookie can be. From seasonal flavors to special collaborations,
        there's always something exciting on the horizon. Stay connected with
        us, share your moments of cookie joy, and become part of the La Cookie
        Shop family. Together, we'll continue spreading happiness, one delicious
        bite at a time.
      </p>
      <motion.div
        className="flex justify-center"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 3}}
      >
        <Button
          variant="green"
          size="lg"
          className="bg-green hover:bg-green-600 font-silk text-white"
          onClick={() => navigate('/our-cookies')}
        >
          Explore Our Cookies
        </Button>
      </motion.div>
    </motion.section>
  );
}
