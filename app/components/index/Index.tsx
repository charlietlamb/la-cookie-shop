import Bundle from '../bundle/Bundle';
import Faq from '../faq/Faq';
import Signature from '../signature/Signature';
import Blog from './blog/Blog';
import IndexCorporate from './corporate/IndexCorporate';
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
      <Bundle className="py-16" index />
      <Signature />
      <IndexCorporate />
      <Blog />
      <OurCookies className="py-16" index />
      <Faq />
    </>
  );
}
