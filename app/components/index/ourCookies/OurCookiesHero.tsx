import React from 'react';
import OurCookiesHeroBackground from './OurCookiesHeroBackground';
import SignatureCookies from '~/components/signature/SignatureCookies';
import {motion} from 'framer-motion';

export default function OurCookiesHero() {
  return (
    <div className="relative w-full pb-20">
      <div className="bg-light absolute top-0 right-0 left-0 z-0 w-full h-[300px]"></div>
      <OurCookiesHeroBackground />
      <div className="padding-main">
        <div className="relative z-10 h-[300px] flex flex-col items-center gap-4 justify-center mb-[50px] pb-20">
          <motion.h1
            className="title-size font-silk mt-8 text-center"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
          >
            Our Cookies
          </motion.h1>
          <img width={150} src="/logo/logo.PNG" alt="logo" />
        </div>
        <motion.p
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
          className="font-silk w-full py-4 pb-8 text-lg text-center"
        >
          Click to find out more.
        </motion.p>
        <SignatureCookies hero />
      </div>
    </div>
  );
}
