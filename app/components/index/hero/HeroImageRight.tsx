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
    <div className="width-frame bottom-8 right-8 border-dark shadow-baseDark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none duration-600 absolute z-40 overflow-hidden transition-all border-2 rounded-none">
      <img
        src="/images/cookie-dark-tea.jpeg"
        alt="Hero Image Left"
        className="relative z-20 w-full rounded-none"
      />
      <img
        ref={scope}
        src="/images/cookie-mag.jpeg"
        alt="Hero Image Left"
        className="absolute top-0 z-30 w-full h-full rounded-none"
      />
    </div>
  );
}
