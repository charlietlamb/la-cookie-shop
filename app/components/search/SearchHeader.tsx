import {Separator} from '../ui/separator';

export default function SearchHeader() {
  return (
    <div>
      <h4 className="font-cardo h3-size text-sand font-medium uppercase">
        Search
      </h4>
      <p className="font-cardo font-light">
        Search for products, collections, articles, and more.
      </p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
