import {Separator} from '../ui/separator';

export default function SearchHeader() {
  return (
    <div>
      <h4 className="font-silk h3-size text-sand font-medium uppercase">
        Search
      </h4>
      <p className="font-silk font-light">
        Search for products, collections, articles, and more.
      </p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
