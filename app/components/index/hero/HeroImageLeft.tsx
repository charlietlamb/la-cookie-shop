import {useAnimate} from 'framer-motion';
import {useEffect} from 'react';

export default function HeroImageLeft() {
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
    <div className="width-frame overflow-hidden hidden md:flex rounded-none z-40 top-[120px] absolute left-8 border-2 border-dark shadow-baseDark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all duration-600">
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
