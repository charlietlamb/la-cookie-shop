import {Separator} from '~/components/ui/separator';

export default function HeaderMobileMoreHeader() {
  return (
    <div>
      <h4 className="font-silk h3-size text-green font-medium uppercase">
        More
      </h4>
      <p className="font-silk font-light">
        Find out more about La Cookie Shop.
      </p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
