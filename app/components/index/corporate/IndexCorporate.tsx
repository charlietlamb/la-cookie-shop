import {useRef} from 'react';
import IndexCorporateImage from './IndexCorporateImage';
import IndexCorporateText from './IndexCorporateText';

export default function IndexCorporate() {
  return (
    <div className="bg-light padding-main md:grid-cols-2 grid grid-cols-1 gap-4 py-16">
      <IndexCorporateText />
      <IndexCorporateImage />
    </div>
  );
}
