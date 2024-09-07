import HeaderLink from './HeaderLink';
import HeaderPopover from './popover/HeaderPopover';

export function HeaderMenuLeft() {
  return (
    <nav className="realtive border-sand md:flex items-center hidden w-full h-full gap-4 border-b">
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/our-cookies">Our Cookies</HeaderLink>
      <HeaderLink to="/bundle">Bundle</HeaderLink>
      <HeaderPopover />
    </nav>
  );
}
