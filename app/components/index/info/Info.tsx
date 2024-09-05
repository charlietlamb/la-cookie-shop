import InfoGif from './InfoGif';
import InfoText from './InfoText';

export default function Info() {
  return (
    <div className="bg-pink padding-main md:flex-row flex flex-col gap-4 py-16">
      <InfoText />
      <InfoGif />
    </div>
  );
}
