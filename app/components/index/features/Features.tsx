import {useRef} from 'react';
import FeaturesCookieRight from './FeaturesCookieRight';
import FeaturesContent from './FeaturesContent';
import {useScroll} from 'framer-motion';
import FeaturesCookieLeft from './FeaturesCookieLeft';
import {motion} from 'framer-motion';
import {FeaturesContext} from './context';
export default function Features() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const {scrollY} = useScroll({
    container: scrollRef,
  });
  return (
    <FeaturesContext.Provider value={{scrollY}}>
      <div className="bg-green padding-main-large relative py-32">
        <FeaturesContent ref={scrollRef} />
        <FeaturesCookieRight />
        <FeaturesCookieLeft />
      </div>
    </FeaturesContext.Provider>
  );
}
