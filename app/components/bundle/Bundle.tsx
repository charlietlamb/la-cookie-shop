import {useOpenStore} from '~/store/open';
import useWindowDimensions from '../utils/useWindowDimensions';
import BundleContent from './BundleContent';
import BundleDisplay from './display/BundleDisplay';
import useSetHeaderOpen from '../utils/useSetHeaderOpen';

export default function Bundle() {
  const {setHeaderOpen} = useOpenStore();
  const {height} = useWindowDimensions();
  useSetHeaderOpen(setHeaderOpen, height);
  return (
    <div className="padding-main bundle md:flex-row relative flex flex-col py-8">
      <BundleDisplay />
      <BundleContent />
    </div>
  );
}
