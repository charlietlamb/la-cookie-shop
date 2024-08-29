import {cookieData} from '~/data/cookieData';
import OurCookiesCarouselItem from './OurCookiesCarouselItem';

export default function OurCookiesLayout() {
  return (
    <div className="md:flex flex-col hidden w-full gap-8">
      {cookieData.map((cookie, index) => (
        <OurCookiesCarouselItem
          cookie={cookie}
          key={cookie.id}
          innerClassName={index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}
          headingClassName={index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}
          paragraphClassName={index % 2 === 1 ? 'text-right' : 'text-left'}
        />
      ))}
    </div>
  );
}
