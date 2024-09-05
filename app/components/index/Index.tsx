import Bundle from '../bundle/Bundle';
import Signature from '../signature/Signature';
import Features from './features/Features';
import Hero from './hero/Hero';
import Info from './info/Info';
import OurCookies from './ourCookies/OurCookies';

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Info />
      <Bundle className="py-16" />
      <Signature />
      <OurCookies className="py-16" />
    </>
  );
}
