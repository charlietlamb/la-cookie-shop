import {CartApiQueryFragment} from 'storefrontapi.generated';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {Search} from 'lucide-react';
import {cartAtom, searchAtom} from '~/store/open';
import {useAtom} from 'jotai';
import {SearchResultsPredictive} from './SearchResultsPredictive';
import {Link} from '@remix-run/react';
import {SEARCH_ENDPOINT, SearchFormPredictive} from './SearchFormPredictive';
import SearchMain from './SearchMain';

export default function SearchSheet() {
  const [isOpen, setIsOpen] = useAtom(searchAtom);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Search className="text-brown mb-1" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent>
        <SearchMain />
      </SheetContent>
    </Sheet>
  );
}
