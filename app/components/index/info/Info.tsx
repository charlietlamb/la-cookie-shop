import {RefObject} from 'react';
import InfoGif from './InfoGif';
import InfoText from './InfoText';

export default function Info({infoRef}: {infoRef: RefObject<HTMLDivElement>}) {
  return (
    <div
      ref={infoRef}
      className="padding-main md:flex-row text-dark bg-light flex flex-col items-stretch gap-4 py-16"
    >
      <InfoGif />
      <div className="flex-1">
        <InfoText />
      </div>
    </div>
  );
}
