import {useSetAtom} from 'jotai';
import HeaderLink from './HeaderLink';
import {headerAtom} from '~/store/header';

export default function HeaderHoverLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  const setHeader = useSetAtom(headerAtom);
  return (
    <div
      onMouseEnter={() => setHeader(to)}
      // onMouseLeave={() => setHeader(null)}
    >
      <HeaderLink to={to} className={className}>
        {children}
      </HeaderLink>
    </div>
  );
}
