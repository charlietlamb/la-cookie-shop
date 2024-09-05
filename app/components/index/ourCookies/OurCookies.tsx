import {cn} from '~/lib/utils';
import OurCookiesCarousel from './OurCookiesCarousel';
import OurCookiesLayout from './OurCookiesLayout';
import OurCookiesTitle from './OurCookiesTitle';
import {useOpenStore} from '~/store/open';
import useWindowDimensions from '~/components/utils/useWindowDimensions';
import useSetHeaderOpen from '~/components/utils/useSetHeaderOpen';
import Faq from '~/components/faq/Faq';

export default function OurCookies({
  className,
  index = false,
}: {
  className?: string;
  index?: boolean;
}) {
  const {setHeaderOpen} = useOpenStore();
  const {height} = useWindowDimensions();
  useSetHeaderOpen(setHeaderOpen, height);
  return (
    <div>
      <div
        className={cn(
          'flex flex-col items-center gap-12 pt-16 padding-main',
          className,
        )}
      >
        <OurCookiesTitle />
        <OurCookiesLayout />
      </div>
      {!index && <Faq />}
    </div>
  );
}
