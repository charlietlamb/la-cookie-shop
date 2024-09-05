import {useOpenStore} from '~/store/open';
import useWindowDimensions from '../utils/useWindowDimensions';
import BundleContent from './BundleContent';
import BundleDisplay from './display/BundleDisplay';
import useSetHeaderOpen from '../utils/useSetHeaderOpen';
import {cn} from '~/lib/utils';
import Faq from '../faq/Faq';
import Signature from '../signature/Signature';
import BundleHero from './hero/BundleHero';

export default function Bundle({
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
      <BundleHero />
      <div
        className={cn(
          'padding-main bundle md:flex-row relative flex flex-col py-8 gap-4 md:gap-0',
          className,
        )}
      >
        <BundleDisplay />
        <BundleContent />
      </div>
      {!index && (
        <>
          <Signature />
          <Faq />
        </>
      )}
    </div>
  );
}
