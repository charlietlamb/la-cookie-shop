import SignatureCookies from '~/components/signature/SignatureCookies';
import NextSeason from './NextSeason';

export default function FlavoursText() {
  return (
    <div className=" flex flex-col flex-grow w-full h-full gap-4">
      <h2 className="font-silk big-size text-xl">
        New Flavours <br /> Every Season.
      </h2>
      <p className="font-silk h2-size">Any Guesses?</p>
      <p className="w-full font-bold text-center uppercase">THIS SEASON:</p>
      <SignatureCookies className="text-dark" flavours />
      <p className="w-full font-bold text-center uppercase">NEXT SEASON:</p>
      <NextSeason />
    </div>
  );
}
