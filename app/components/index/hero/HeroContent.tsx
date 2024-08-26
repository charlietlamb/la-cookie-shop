import {Button} from '~/components/ui/button';

export default function HeroContent() {
  return (
    <div className="text-brown relative md:bg-white flex flex-col items-center justify-center max-w-[90%] md:max-w-[50%] mx-auto text-center md:p-12 md:border-2 border-dark md:shadow-baseDark z-30">
      <h1 className="font-silk h1-size text-dark font-medium">
        American Style Cookies crafted by our European Patisserie
      </h1>
      <Button className="h-auto" variant="hero">
        Curate your own cookie assortment
      </Button>
    </div>
  );
}
