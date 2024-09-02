import Bundle from '../bundle/Bundle';
import Features from './features/Features';
import Hero from './hero/Hero';
import OurCookies from './ourCookies/OurCookies';

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Bundle />
      <OurCookies className="py-16" />
    </>
  );
}
