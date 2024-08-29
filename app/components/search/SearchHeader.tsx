import {Separator} from '../ui/separator';

export default function SearchHeader() {
  return (
    <div>
      <h4 className="font-silk h3-size text-brown font-medium uppercase">
        Search
      </h4>
      <p className="font-silk font-light">
        Search for products, collections, articles, and more.
      </p>
      <Separator className="bg-brown my-2" />
    </div>
  );
}
