import {cookieData} from '~/data/cookieData';
import BundleSelectionOption from './BundleSelectionOption';

export default function BundleSelectionOptions() {
  return (
    <div className="flex w-full gap-2">
      {cookieData.map((cookie) => (
        <BundleSelectionOption key={cookie.id} cookie={cookie} />
      ))}
    </div>
  );
}
