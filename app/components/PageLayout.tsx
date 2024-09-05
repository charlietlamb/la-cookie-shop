import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {Footer} from '~/components/footer/Footer';
import {Header} from '~/components/header/Header';

interface PageLayoutProps {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
  children?: React.ReactNode;
}

export function PageLayout({
  cart,
  children = null,
  isLoggedIn,
}: PageLayoutProps) {
  return (
    <>
      <Header cart={cart} isLoggedIn={isLoggedIn} />
      <main className="relative flex-grow mt-[60px] lg:mt-[72px] xl:mt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
