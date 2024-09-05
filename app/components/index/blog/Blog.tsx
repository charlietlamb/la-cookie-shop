import {useNavigate} from '@remix-run/react';
import {Button} from '~/components/ui/button';
import {motion} from 'framer-motion';

export default function Blog() {
  const navigate = useNavigate();

  return (
    <motion.div className="padding-main flex flex-col items-center gap-8 py-16">
      <motion.h3
        className="title-size font-silk text-center"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
      >
        Blog
      </motion.h3>
      <motion.div
        className="md:grid-cols-2 grid grid-cols-1 gap-8"
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
              className="font-silk h3-size"
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
