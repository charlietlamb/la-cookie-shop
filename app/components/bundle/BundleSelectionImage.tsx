import {useAtomValue} from 'jotai';
import {bundleSelectedAtom} from '~/store/bundle';

export default function BundleSelectionImage() {
  const bundleSelected = useAtomValue(bundleSelectedAtom);
  return (
    <div className="aspect-square border-sand lg:w-1/2 md:flex items-center justify-center hidden w-full overflow-hidden border">
      <img src={bundleSelected.image} alt={bundleSelected.name} />
    </div>
  );
}
