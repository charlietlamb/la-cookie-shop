import {cookieData} from '~/data/cookieData';
import BundleSelectionOption from './BundleSelectionOption';

export default function BundleSelectionOptions() {
  return (
    <div className="grid grid-cols-2 gap-2 px-8">
      {cookieData.map((cookie, index) => (
        <BundleSelectionOption
          key={cookie.name}
          cookie={cookie}
          index={index}
        />
      ))}
    </div>
  );
}
