import HeaderHoverLink from './HeaderHoverLink';
import HeaderPopover from './HeaderPopover';

export function HeaderMenuLeft() {
  return (
    <nav className="realtive border-green flex items-center w-full gap-4 border-b">
      <HeaderHoverLink to="/bundle">Bundle</HeaderHoverLink>
      <HeaderHoverLink to="/shop">Shop</HeaderHoverLink>
      <HeaderHoverLink to="/our-cookies">Our Cookies</HeaderHoverLink>
      <HeaderHoverLink to="/blogs">Blog</HeaderHoverLink>
      <HeaderPopover />
    </nav>
  );
}
