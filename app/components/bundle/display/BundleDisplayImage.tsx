import {useAtomValue} from 'jotai';
import {selectedCookieAtom} from '~/store/bundle';

export default function BundleDisplayImage() {
  const selectedCookie = useAtomValue(selectedCookieAtom);
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="object-cover w-full h-full"
        src={selectedCookie.image}
        alt={selectedCookie.name}
      />
    </div>
  );
}
