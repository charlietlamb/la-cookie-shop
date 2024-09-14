import {useOpenStore} from '~/store/open';
import useWindowDimensions from '../utils/useWindowDimensions';
import BundleContent from './BundleContent';
import BundleDisplay from './display/BundleDisplay';
import useSetHeaderOpen from '../utils/useSetHeaderOpen';
import {cn} from '~/lib/utils';
import Faq from '../faq/Faq';
import Signature from '../signature/Signature';
import BundleHero from './hero/BundleHero';
import {useSetBundleOpen} from '../utils/useSetBundleOpen';

export default function Bundle({
  className,
  index = false,
  bundleRef,
}: {
  className?: string;
  index?: boolean;
  bundleRef?: React.RefObject<HTMLDivElement>;
}) {
  const {setHeaderOpen, setBundleOpen} = useOpenStore();
  const {height} = useWindowDimensions();
  useSetHeaderOpen(setHeaderOpen, height);
  useSetBundleOpen(setBundleOpen, bundleRef);
  return (
    <div>
      <BundleHero index={index} />
      <div
        className={cn(
          'padding-main bundle md:flex-row relative flex flex-col py-8 gap-4 md:gap-0',
          className,
        )}
      >
        <BundleDisplay />
        <BundleContent bundleRef={bundleRef} />
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
