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
      <h3 className="font-silk text-green mb-6 text-3xl text-center">
        Join Our Journey
      </h3>
      <p className="mb-6 text-lg font-light text-center">
        From our humble beginnings in a Parisian kitchen to our current status
        as a beloved European brand, every step of La Cookie Shop's journey has
        been guided by our passion for creating joy through exceptional cookies.
        But our story is far from over - in fact, we believe the best chapters
        are yet to be written.
      </p>
      <p className="mb-8 text-lg font-light text-center">
        We invite you to be part of our ongoing story. Whether you're a
        long-time fan or discovering us for the first time, every cookie you
        enjoy, every visit you make to our shops, and every moment you share
        with loved ones over our creations becomes a part of the La Cookie Shop
        tale. Join us as we continue to explore new flavors, push the boundaries
        of what a cookie can be, and spread happiness, one delicious bite at a
        time.
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
