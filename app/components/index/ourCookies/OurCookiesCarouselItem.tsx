import {motion} from 'framer-motion';
import {CookieData} from '~/data/cookieData';
import {cn} from '~/lib/utils';
import {Separator} from '~/components/ui/separator';
import CookieButton from '~/components/utils/CookieButton';
import {useAtom} from 'jotai';
import {bundleAtom} from '~/store/bundle';
import {addToBundle} from '~/functions/addToBundle';
import {useNavigate} from '@remix-run/react';

export default function OurCookiesCarouselItem({
  cookie,
  index,
}: {
  cookie: CookieData;
  index: number;
}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  const navigate = useNavigate();
  const handleAddToBundle = () => {
    const newBundle = addToBundle(bundle, cookie);
    setBundle(newBundle);
    navigate('/bundle');
  };
  const odd = index % 2 === 1;

  return (
    <motion.div
      id={`cookie-${cookie.name}`}
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, delay: index * 0.1}}
      className={cn(
        'flex flex-col md:w-[80%] w-full gap-4 p-8 rounded-lg shadow-md',
        odd ? 'bg-green' : 'bg-white border border-green ml-auto',
      )}
    >
      <motion.div
        initial={{opacity: 0, x: odd ? 50 : -50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.3}}
        className="flex items-center gap-2 overflow-hidden"
      >
        <h4
          className={cn(
            'h1-size font-silk flex-shrink-0 font-medium leading-none uppercase',
            odd ? 'text-white' : 'text-green',
          )}
        >
          {cookie.name}
        </h4>
        <Separator className={cn('flex-grow', odd ? 'bg-white' : 'bg-green')} />
      </motion.div>
      <div
        className={cn(
          'md:flex-row flex flex-col gap-6',
          odd ? 'text-white' : 'text-dark md:flex-row-reverse',
        )}
      >
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.6}}
          className={cn(
            'aspect-square md:w-1/3 flex-shrink-0 w-full overflow-hidden border border-white rounded-lg shadow-lg',
            odd ? 'border-white' : 'border-green',
          )}
        >
          <img
            src={cookie.image}
            alt={cookie.name}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.9}}
          className="md:w-2/3 flex flex-col gap-4"
        >
          <p className="font-[200] md:text-lg font-inter">
            {cookie.description}
          </p>
          <CookieButton
            variant={odd ? 'actionWhite' : 'actionGreen'}
            className="group p-text w-full mt-auto overflow-hidden"
            onClick={handleAddToBundle}
          >
            Add to your assortment
          </CookieButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
