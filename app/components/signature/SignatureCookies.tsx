import {cookieData} from '~/data/cookieData';
import BundleSelectionOption from '../bundle/selection/BundleSelectionOption';
import {cn} from '~/lib/utils';

export default function SignatureCookies({
  hero = false,
  className,
  flavours = false,
}: {
  hero?: boolean;
  className?: string;
  flavours?: boolean;
}) {
  return (
    <div
      className={cn(
        'lg:grid-cols-5 md:grid-cols-6 grid grid-cols-1 gap-2',
        className,
      )}
    >
      {cookieData.map((cookie, index) => (
        <BundleSelectionOption
          key={cookie.name}
          cookie={cookie}
          disabled={hero ? false : true}
          hero={hero}
          index={index}
          className={cn(
            'w-full col-span-2 lg:col-span-1 cursor-default',
            index > 2 && 'col-span-3 lg:col-span-1',
            hero && 'cursor-pointer',
            flavours && 'flex flex-col justify-start',
          )}
          small
        />
      ))}
    </div>
  );
}
