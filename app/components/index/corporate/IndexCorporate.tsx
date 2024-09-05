import IndexCorporateImage from './IndexCorporateImage';
import IndexCorporateText from './IndexCorporateText';

export default function IndexCorporate() {
  return (
    <div className="bg-pink padding-main md:flex-row flex flex-col gap-4 py-16">
      <div className="flex-1">
        <IndexCorporateImage />
      </div>
      <div className="flex-1">
        <IndexCorporateText />
      </div>
    </div>
  );
}
