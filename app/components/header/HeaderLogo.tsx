import {useNavigate} from '@remix-run/react';
import Logo from '../brand/Logo';

export default function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <div
      className="xl:px-16 lg:px-12 md:flex-grow-0 flex-grow px-4 cursor-pointer"
      onClick={() => navigate('/')}
    >
      <Logo />
    </div>
  );
}
