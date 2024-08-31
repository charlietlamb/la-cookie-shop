import {useAtomValue} from 'jotai';
import BundleAddToCart from './BundleAddToCart';
import {boxesAtom, selectedBoxAtom} from '~/store/bundle';
import {BundlePlanSelector} from '../plan/BundlePlanSelector';

export default function BundleAction() {
  return (
    <div>
      <BundlePlanSelector />
      <BundleAddToCart />
    </div>
  );
}
