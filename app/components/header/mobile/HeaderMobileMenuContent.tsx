import {useAtomValue} from 'jotai';
import {headerAtom} from '~/store/header';
import {headerMobileMap} from './headerMobileMap';

export default function HeaderMobileMenuContent() {
  const header = useAtomValue(headerAtom);
  return headerMobileMap.get(header);
}
