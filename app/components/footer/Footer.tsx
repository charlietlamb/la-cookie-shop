import FooterBrand from './FooterBrand';
import {Link} from '@remix-run/react';

export function Footer() {
  return (
    <footer className="bg-light py-8">
      <div className="padding-main md:grid-cols-4 grid grid-cols-1 gap-8">
        <FooterBrand />
        <div>
          <h3 className="font-silk mb-4 text-lg uppercase">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/bundle" className="hover:underline">
                Create a Bundle
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:underline">
                Our Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-silk mb-4 text-lg uppercase">About</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/story" className="hover:underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/hospitality" className="hover:underline">
                Hospitality
              </Link>
            </li>
            <li>
              <Link to="/corporate" className="hover:underline">
                Corporate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-silk mb-4 text-lg uppercase">Info</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/blogs" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/policies" className="hover:underline">
                Policies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
