import {useAnimate} from 'framer-motion';
import {useEffect} from 'react';

export default function HeroImageLeftAlt() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const animateOpacity = async () => {
      while (true) {
        await animate(
          scope.current,
          {opacity: 1},
          {duration: 2, ease: 'easeInOut'},
        );

        await new Promise((resolve) => setTimeout(resolve, 8000));

        await animate(
          scope.current,
          {opacity: 0},
          {duration: 2, ease: 'easeInOut'},
        );
        await new Promise((resolve) => setTimeout(resolve, 8000));
      }
    };

    animateOpacity();

    return () => {
      animate(scope.current, {opacity: 1}, {duration: 0});
    };
  }, [animate, scope]);

  return (
    <div className="width-frame md:flex duration-600 absolute bottom-0 left-0 z-40 hidden overflow-hidden transition-all rounded-none rounded-tr-full">
      <img
        src="/images/cookies-stack-mag.jpeg"
        alt="Hero Image Left"
        className="relative z-20 w-full"
      />
      <img
        ref={scope}
        src="/images/cookie-hand.jpg"
        alt="Hero Image Left"
        className="absolute top-0 z-30 w-full h-full"
      />
    </div>
  );
}
