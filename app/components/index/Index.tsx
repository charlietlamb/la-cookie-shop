import {useRef} from 'react';
import Bundle from '../bundle/Bundle';
import Faq from '../faq/Faq';
import Signature from '../signature/Signature';
import Blog from './blog/Blog';
import IndexCorporate from './corporate/IndexCorporate';
import Features from './features/Features';
import Flavours from './flavours/Flavours';
import Hero from './hero/Hero';
import Info from './info/Info';
import OurCookies from './ourCookies/OurCookies';
import StickyBundle from './sticky/StickyBundle';

export default function Index() {
  const bundleRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Hero infoRef={infoRef} />
      <Features />
      <Info infoRef={infoRef} />
      <Bundle className="py-16" index bundleRef={bundleRef} />
      <Signature />
      <IndexCorporate />
      <OurCookies className="pb-16" index />
      <Flavours />
      <Blog />
      <Faq />
      <StickyBundle bundleRef={bundleRef} />
    </>
  );
}
