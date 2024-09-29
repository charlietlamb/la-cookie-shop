import {Link} from '@remix-run/react';
import {cn} from '~/lib/utils';

export default function HeaderLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'uppercase font-light font-harken leading-none pb-1 whitespace-nowrap hover:text-sand transition-colors duration-300',
        className,
      )}
    >
      {children}
    </Link>
  );
}
