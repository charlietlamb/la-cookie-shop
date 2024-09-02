import {Menu} from 'lucide-react';
import {Sheet, SheetContent, SheetTrigger} from '~/components/ui/sheet';
import HeaderMobileMenu from './HeaderMobileMenu';

export default function HeaderMobileLeft() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden flex">
        <Menu strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent side="left" className="rounded-l-none rounded-r-lg">
        <HeaderMobileMenu />
      </SheetContent>
    </Sheet>
  );
}
