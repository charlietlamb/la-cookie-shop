import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroInstagram from './HeroInstagram';

export default function Hero() {
  return (
    <div className="min-h-[450px] py-20 flex flex-col items-center relative">
      <HeroContent />
      <HeroImage />
      <HeroInstagram />
    </div>
  );
}
