import SignatureCookies from './SignatureCookies';
import SignatureDescription from './SignatureDescription';
import SignatureTitle from './SignatureTitle';

export default function SignatureText() {
  return (
    <div className="md:sticky md:top-0 h-fit md:pt-[60px] lg:pt-[72px] xl:pt-[80px] flex flex-col px-4 flex flex-col gap-10">
      <SignatureTitle />
      <SignatureCookies />
      <SignatureDescription />
    </div>
  );
}
