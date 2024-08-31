import {useSetAtom} from 'jotai';
import HeaderLink from './HeaderLink';
import {headerAtom} from '~/store/header';
import {ChevronDownIcon} from 'lucide-react';
import {cn} from '~/lib/utils';

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
      className=""
      // onMouseLeave={() => setHeader(null)}
    >
      <HeaderLink to={to} className={cn('group', className)}>
        <p>{children}</p>
        <ChevronDownIcon
          className="group-hover:rotate-180 transition-transform duration-300"
          strokeWidth={1.5}
        />
      </HeaderLink>
    </div>
  );
}
