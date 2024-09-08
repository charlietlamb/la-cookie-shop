import {Separator} from '../ui/separator';

export default function OffersHeader() {
  return (
    <div>
      <h4 className="font-cardo h3-size text-sand font-medium uppercase">
        Offers
      </h4>
      <p className="font-cardo font-light">Our special offers at the moment</p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
