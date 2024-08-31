import {useAtomValue} from 'jotai';
import {selectedCookieAtom} from '~/store/bundle';

export default function BundleDisplayText() {
  const selectedCookie = useAtomValue(selectedCookieAtom);
  return (
    <div className="flex flex-col items-center w-full px-4">
      <h1 className="h1-size text-brown font-silk uppercase">
        {selectedCookie.name}
      </h1>
      <p className="font-[200] text-center text-dark">
        {selectedCookie.description}
      </p>
    </div>
  );
}
