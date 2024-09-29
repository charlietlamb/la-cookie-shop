import {RefObject} from 'react';
import InfoGif from './InfoGif';
import InfoText from './InfoText';

export default function Info({infoRef}: {infoRef: RefObject<HTMLDivElement>}) {
  return (
    <div
      ref={infoRef}
      className="padding-main text-dark bg-light md:grid-cols-2 grid grid-cols-1 gap-4 py-16"
    >
      <InfoText />
      <InfoGif />
    </div>
  );
}
