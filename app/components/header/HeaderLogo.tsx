import {useNavigate} from '@remix-run/react';
import Logo from '../brand/Logo';

export default function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <div className="px-16 cursor-pointer" onClick={() => navigate('/')}>
      <Logo />
    </div>
  );
}
