import HeroContent from './HeroContent';
import HeroImageBackground from './HeroImageBackground';
import HeroImageLeft from './HeroImageLeft';
import HeroImageRight from './HeroImageRight';

export default function Hero() {
  return (
    <div className="font-silk overflow-hidden min-h-[90vh] flex flex-col items-center justify-center text-[300px] relative">
      <HeroImageLeft />
      <HeroImageRight />
      <HeroContent />
      <div className="absolute z-20 bg-brown h-[20vh] w-full bottom-0 -skew-y-6 border-t-2 border-dark" />
      <div className="absolute z-20 bg-brown h-[10vh] w-full bottom-0 " />
      <div className="opacity-80 absolute inset-0 z-10 bg-white" />
      <HeroImageBackground />
    </div>
  );
}
