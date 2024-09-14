import SignatureCookies from '~/components/signature/SignatureCookies';
import NextSeason from './NextSeason';

export default function FlavoursText() {
  return (
    <div className=" flex flex-col flex-grow w-full h-full gap-4">
      <h2 className="font-cardo h1-size text-xl text-center">
        New Flavours, Every Season.
      </h2>
      <p className="text-brown w-full text-center uppercase">THIS SEASON:</p>
      <SignatureCookies className="text-dark" flavours />
      <p className="text-brown w-full text-center uppercase">NEXT SEASON:</p>
      <NextSeason />
    </div>
  );
}
