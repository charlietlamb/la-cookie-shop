import {useOpenStore} from '~/store/open';
import useWindowDimensions from '../utils/useWindowDimensions';
import BundleContent from './BundleContent';
import BundleDisplay from './display/BundleDisplay';
import useSetHeaderOpen from '../utils/useSetHeaderOpen';
import {cn} from '~/lib/utils';

export default function Bundle({className}: {className?: string}) {
  const {setHeaderOpen} = useOpenStore();
  const {height} = useWindowDimensions();
  useSetHeaderOpen(setHeaderOpen, height);
  return (
    <div
      className={cn(
        'padding-main bundle md:flex-row relative flex flex-col py-8',
        className,
      )}
    >
      <BundleDisplay />
      <BundleContent />
    </div>
  );
}
