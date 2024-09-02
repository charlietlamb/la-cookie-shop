import {Link} from '@remix-run/react';
import {FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex items-center justify-center w-full gap-4 text-white">
      <Link to="/">
        <FaFacebook className="size-8" />
      </Link>
      <Link to="/">
        <FaInstagram className="size-8" />
      </Link>
      <Link to="/">
        <FaPinterest className="size-8" />
      </Link>
    </div>
  );
}
