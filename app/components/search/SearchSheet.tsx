import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {useAtom} from 'jotai';
import SearchMain from './SearchMain';
import {searchAtom} from '~/store/open';
import {Search} from 'lucide-react';

export default function SearchSheet() {
  const [isOpen, setIsOpen] = useAtom(searchAtom);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Search strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent>
        <SearchMain />
      </SheetContent>
    </Sheet>
  );
}
