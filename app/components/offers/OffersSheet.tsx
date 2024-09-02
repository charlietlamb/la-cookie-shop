import {Badge} from '../ui/badge';
import {Button} from '../ui/button';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import OffersContent from './OffersContent';

export default function OffersSheet() {
  return (
    <Sheet>
      <SheetTrigger className="md:flex items-center hidden">
        <Button
          variant="green"
          className="text-md px-2 pt-2 pb-1.5 leading-4"
          size="auto"
        >
          View Offers
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="rounded-l-none rounded-r-lg">
        <OffersContent />
      </SheetContent>
    </Sheet>
  );
}
