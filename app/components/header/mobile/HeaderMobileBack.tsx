import {useSetAtom} from 'jotai';
import {ChevronLeftIcon} from 'lucide-react';
import {headerAtom} from '~/store/header';

export default function HeaderMobileBack() {
  const setHeader = useSetAtom(headerAtom);
  return (
    <div
      className=" font-cardo flex items-center justify-between w-full text-lg uppercase cursor-pointer"
      onClick={() => setHeader(null)}
    >
      Back
      <ChevronLeftIcon className="w-4 h-4" />
    </div>
  );
}
