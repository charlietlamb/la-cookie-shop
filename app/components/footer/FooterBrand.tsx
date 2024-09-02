import Logo from '../brand/Logo';
import Socials from '../brand/Socials';

export default function FooterBrand() {
  return (
    <div className="flex flex-col items-center">
      <Logo className="text-white" />
      <Socials />
    </div>
  );
}
