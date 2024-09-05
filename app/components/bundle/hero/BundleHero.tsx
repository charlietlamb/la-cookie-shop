import React from 'react';
import SignatureCookies from '~/components/signature/SignatureCookies';
import {motion} from 'framer-motion';
import OurCookiesHeroBackground from '~/components/index/ourCookies/OurCookiesHeroBackground';

export default function OurCookiesHero() {
  return (
    <div className="relative w-full pb-20">
      <div className="bg-pink absolute top-0 right-0 left-0 z-0 w-full h-[400px]"></div>
      <OurCookiesHeroBackground className="bundle" />
      <div className="padding-main">
        <div className="relative z-10 h-[400px] flex flex-col items-center gap-4 justify-center mb-[300px]">
          <motion.h1
            className="title-size font-silk mt-8 text-center text-white"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
          >
            Create Your Bespoke <br /> Cookie Box
          </motion.h1>
          <img width={150} src="/logo/logo.PNG" alt="logo" />
        </div>
        <SignatureCookies />
      </div>
    </div>
  );
}
