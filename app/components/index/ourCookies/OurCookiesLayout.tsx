import {cookieData} from '~/data/cookieData';
import OurCookiesCarouselItem from './OurCookiesCarouselItem';

export default function OurCookiesLayout() {
  return (
    <div className="flex flex-col w-full gap-8">
      {cookieData.map((cookie, index) => (
        <OurCookiesCarouselItem
          cookie={cookie}
          key={cookie.name}
          index={index + 1}
        />
      ))}
    </div>
  );
}
