import OurCookiesCarousel from './OurCookiesCarousel';
import {Separator} from '~/components/ui/separator';

export default function OurCookiesTitle() {
  return (
    <div className=" flex flex-col w-full">
      <h2 className="font-silk title-size text-sand font-medium leading-none">
        Our Cookies
      </h2>
      <Separator className="mb-2 bg-white" />
    </div>
  );
}
