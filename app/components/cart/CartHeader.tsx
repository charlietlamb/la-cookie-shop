import {Separator} from '../ui/separator';

export default function CartHeader({count}: {count: number | undefined}) {
  return (
    <div>
      <h4 className="font-silk h3-size text-brown font-medium uppercase">
        Cart
      </h4>
      <p className="font-silk font-light">
        You have <span className="font-medium">{count ?? 0}</span> items in your
        cart.
      </p>
      <Separator className="bg-brown my-2" />
    </div>
  );
}
