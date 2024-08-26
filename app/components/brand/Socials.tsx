import {Link} from '@remix-run/react';
import {FaFacebook} from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex items-center gap-2">
      <Link to="/">
        <FaFacebook className="size-5" />
      </Link>
    </div>
  );
}
