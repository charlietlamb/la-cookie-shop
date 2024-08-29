import {cookieData} from '~/data/cookieData';
import BundleSelectionOption from './BundleSelectionOption';

export default function BundleSelectionOptions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {cookieData.map((cookie) => (
        <BundleSelectionOption key={cookie.name} cookie={cookie} />
      ))}
    </div>
  );
}
