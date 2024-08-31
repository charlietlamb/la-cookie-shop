import {headerAtom} from '~/store/header';
import HeaderMobileMenuContent from './HeaderMobileMenuContent';
import {useAtomValue} from 'jotai';
import OffersHeader from '~/components/offers/OffersHeader';
import HeaderMobileMoreHeader from './HeaderMobileMoreHeader';
import HeaderMobileMenuHeader from './HeaderMobileMenuHeader';

export default function HeaderMobileMenu() {
  const header = useAtomValue(headerAtom);
  return (
    <div className="flex flex-col w-full">
      {header === '/offers' ? (
        <OffersHeader />
      ) : header === '/more' ? (
        <HeaderMobileMoreHeader />
      ) : (
        <HeaderMobileMenuHeader />
      )}
      <HeaderMobileMenuContent />
    </div>
  );
}
