import {Badge} from '../ui/badge';
import {Button} from '../ui/button';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import OffersContent from './OffersContent';

export default function OffersSheet() {
  return (
    <Sheet>
      <SheetTrigger className="md:flex items-center hidden">
        <Button
          variant="actionSand"
          className="text-md p-1 py-0.5 mb-1"
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
