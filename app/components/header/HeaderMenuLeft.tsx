import HeaderHoverLink from './HeaderHoverLink';
import HeaderPopover from './HeaderPopover';

export function HeaderMenuLeft() {
  return (
    <nav className="realtive border-sand flex items-center w-full border-b">
      <HeaderHoverLink to="/shop">Shop</HeaderHoverLink>
      <HeaderPopover />
    </nav>
  );
}
