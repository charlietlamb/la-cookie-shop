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
  innerClassName,
  headingClassName,
  paragraphClassName,
}: {
  cookie: CookieData;
  innerClassName?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}) {
  const [bundle, setBundle] = useAtom(bundleAtom);
  const navigate = useNavigate();
  const handleAddToBundle = () => {
    const newBundle = addToBundle(bundle, cookie);
    setBundle(newBundle);
    navigate('/bundle');
  };
  return (
    <div className="md:gap-0 flex flex-col w-full gap-2">
      <div
        className={cn(
          'flex items-center gap-2 overflow-hidden',
          headingClassName,
        )}
      >
        <h4
          className={cn(
            'h1-size font-silk flex-shrink-0 text-sand font-medium leading-none uppercase',
          )}
        >
          {cookie.name}
        </h4>
        <Separator className="flex-grow bg-white" />
      </div>
      <div className={cn('flex', innerClassName)}>
        <div className="aspect-square border-sand w-60 h-60 flex flex-col items-center justify-center flex-shrink-0 overflow-hidden border">
          <img src={cookie.image} alt={cookie.name} className="w-full" />
        </div>
        <div className="flex flex-col w-full col-span-2 px-2">
          <p
            className={cn(
              'font-[200] md:leading-none leading-snug md:text-lg font-inter text-white',
              paragraphClassName,
            )}
          >
            {cookie.description}
          </p>
          <div className="md:flex-row lg:flex flex-col hidden w-full gap-2 mt-auto">
            <CookieButton
              variant="actionSand"
              className="group p-text w-full overflow-hidden"
              onClick={handleAddToBundle}
            >
              Add to your assortment
            </CookieButton>
            <CookieButton
              variant="actionSand"
              className="group p-text w-full overflow-hidden"
            >
              Purchase Individually
            </CookieButton>
          </div>
        </div>
      </div>
      <div className="md:flex-row lg:hidden flex flex-col w-full gap-2 pt-2 mt-auto">
        <CookieButton
          variant="actionSand"
          className="group p-text w-full overflow-hidden"
          onClick={handleAddToBundle}
        >
          Add to your assortment
        </CookieButton>
        <CookieButton
          variant="actionSand"
          className="group p-text w-full overflow-hidden"
        >
          Purchase Individually
        </CookieButton>
      </div>
    </div>
  );
}
