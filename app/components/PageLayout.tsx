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
      <main className="flex-grow mt-[69px]">{children}</main>
      <Footer />
    </>
  );
}
