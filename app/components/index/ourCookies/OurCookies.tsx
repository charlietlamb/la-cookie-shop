import {cn} from '~/lib/utils';
import OurCookiesCarousel from './OurCookiesCarousel';
import OurCookiesLayout from './OurCookiesLayout';
import OurCookiesTitle from './OurCookiesTitle';

export default function OurCookies({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'padding-main bg-brown flex flex-col items-center gap-12 pb-16',
        className,
      )}
    >
      <OurCookiesTitle />
      <OurCookiesCarousel />
      <OurCookiesLayout />
    </div>
  );
}
