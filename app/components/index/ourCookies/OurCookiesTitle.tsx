import OurCookiesCarousel from './OurCookiesCarousel';
import {Separator} from '~/components/ui/separator';

export default function OurCookiesTitle() {
  return (
    <div className=" flex flex-col">
      <h2 className="font-silk h1-size text-sand font-medium leading-none">
        Our Cookies
      </h2>
      <Separator className="bg-sand mb-2" />
      <p className="font-silk text-h2 leading-none text-white">
        Our cookies are made with the finest ingredients and the best patisserie
        in the world.
      </p>
      <OurCookiesCarousel />
    </div>
  );
}
