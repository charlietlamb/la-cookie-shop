import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {useAtom} from 'jotai';
import SearchMain from './SearchMain';
import {Search} from 'lucide-react';
import {useOpenStore} from '~/store/open';

export default function SearchSheet() {
  const {searchOpen, setSearchOpen} = useOpenStore();
  return (
    <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
      <SheetTrigger>
        <Search strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent>
        <SearchMain />
      </SheetContent>
    </Sheet>
  );
}
