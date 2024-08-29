import {useNavigate} from '@remix-run/react';
import {Button} from '~/components/ui/button';

export default function HeroContent() {
  const navigate = useNavigate();
  return (
    <div className="text-brown relative sm:bg-white gap-4 flex flex-col items-center justify-center max-w-[90%] sm:max-w-[50%] mx-auto text-center sm:p-12  z-30">
      <h1 className="font-silk h1-size text-dark font-medium">
        American Style Cookies crafted by our European Patisserie
      </h1>
      <Button
        className="h-auto"
        variant="hero"
        onClick={() => navigate('/bundle')}
      >
        Curate your own cookie assortment
      </Button>
    </div>
  );
}
