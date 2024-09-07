import InfoGif from './InfoGif';
import InfoText from './InfoText';

export default function Info() {
  return (
    <div className="padding-main md:flex-row text-dark bg-light flex flex-col items-stretch gap-4 py-16">
      <div className="flex-1">
        <InfoText />
      </div>
      <div className="flex items-center justify-center flex-1">
        <InfoGif />
      </div>
    </div>
  );
}
