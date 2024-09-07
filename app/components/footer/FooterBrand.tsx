import Logo from '../brand/Logo';
import Socials from '../brand/Socials';

export default function FooterBrand() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Logo className="text-dark" />
      <Socials />
    </div>
  );
}
