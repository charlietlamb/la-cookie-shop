import {cookieData} from '~/data/cookieData';
import BundleSelectionOption from '../bundle/selection/BundleSelectionOption';
import {cn} from '~/lib/utils';

export default function SignatureCookies({
  hero = false,
  className,
  flavours = false,
  bundle = false,
  single = false,
}: {
  hero?: boolean;
  className?: string;
  flavours?: boolean;
  bundle?: boolean;
  single?: boolean;
}) {
  return (
    <div
      className={cn(
        'grid-cols-6 grid  gap-4',
        className,
        single && 'grid-cols-2',
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
            'w-full col-span-2 cursor-default flex flex-col justify-start',
            index > 2 && 'col-span-3',
            hero && 'cursor-pointer flex flex-col justify-start',
            flavours && 'flex flex-col justify-start',
            bundle && 'flex flex-col justify-start',
            single && 'col-span-1',
          )}
          small
        />
      ))}
    </div>
  );
}
