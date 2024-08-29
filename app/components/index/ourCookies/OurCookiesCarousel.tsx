import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import {CookieData, cookieData} from '~/data/cookieData';
import OurCookiesCarouselItem from './OurCookiesCarouselItem';

export default function OurCookiesCarousel() {
  return (
    <Carousel className="md:hidden flex flex-col w-full">
      <CarouselContent style={{width: 'calc(100%-40px)'}}>
        {cookieData.map((cookie: CookieData) => (
          <CarouselItem key={cookie.id}>
            <OurCookiesCarouselItem cookie={cookie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-4 mt-8">
        <CarouselPrevious variant="pointer" className="static" />
        <CarouselNext variant="pointer" className="static" />
      </div>
    </Carousel>
  );
}
