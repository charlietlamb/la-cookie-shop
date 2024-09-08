import {useNavigate} from '@remix-run/react';
import {Button} from '~/components/ui/button';
import {motion} from 'framer-motion';
import {Separator} from '~/components/ui/separator';
import {separatorVariants} from '../ourCookies/OurCookiesTitle';

export default function Blog() {
  const navigate = useNavigate();
  const descriptions = new Map([
    [
      'Pairings',
      'How to pair cookies with unique flavour combinations, such as wine, cheese and tea.',
    ],
    ['Lifestyle', 'What is the right occasion for each cookie?'],
  ]);

  return (
    <motion.div className="padding-main md:gap-8 flex flex-col items-center gap-4 py-16">
      <motion.h3
        className="title-size font-cardo text-center uppercase"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
      >
        Our Blog
      </motion.h3>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={separatorVariants}
        className="w-full"
      >
        <Separator className="bg-dark mb-2" />
      </motion.div>
      <motion.p
        className="md:max-w-[50%] pb-8 font-light text-center"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
      >
        Discover the art of gourmet cookies, culinary inspiration, and the
        latest from La Cookie Shop with our blog – your source for
        behind-the-scenes stories, seasonal flavors, and expert tips.
      </motion.p>
      <motion.div
        className="md:grid-cols-2 grid grid-cols-1 gap-16"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: 'easeOut', delay: 0.4}}
      >
        {['Pairings', 'Lifestyle'].map((category, index) => (
          <motion.div
            key={category}
            className="flex flex-col items-center gap-4"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.6 + index * 0.2,
            }}
          >
            <motion.div
              className="w-80 xl:w-[500px] overflow-hidden"
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.8 + index * 0.2,
              }}
            >
              <img
                src={`images/cookie-${index === 0 ? 'coffee-' : ''}mag.jpeg`}
                alt={`${category} blog image`}
              />
            </motion.div>
            <motion.h4
              className="font-cardo h3-size"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1 + index * 0.2,
              }}
            >
              {category}
            </motion.h4>
            <motion.p
              className="font-cardo text-center max-w-[70%]"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1 + index * 0.2,
              }}
            >
              {descriptions.get(category)}
            </motion.p>
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1.2 + index * 0.2,
              }}
            >
              <Button
                variant="actionDarkInverse"
                size="black"
                onClick={() =>
                  navigate(`/blogs/news/${category.toLowerCase()}`)
                }
              >
                Visit Blog
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
