import {cookieData} from '~/data/cookieData';
import BundleSelectionOption from '../bundle/selection/BundleSelectionOption';
import {cn} from '~/lib/utils';

export default function SignatureCookies() {
  return (
    <div className="lg:grid-cols-5 grid grid-cols-6 gap-2">
      {cookieData.map((cookie, index) => (
        <BundleSelectionOption
          key={cookie.name}
          cookie={cookie}
          disabled={true}
          index={index}
          className={cn(
            'w-full col-span-2 lg:col-span-1 cursor-default',
            index > 2 && 'col-span-3 lg:col-span-1',
          )}
          small
        />
      ))}
    </div>
  );
}
