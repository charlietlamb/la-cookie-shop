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
        'uppercase font-light font-silk leading-none lg:text-lg text-md whitespace-nowrap hover:text-green transition-colors duration-300',
        className,
      )}
    >
      {children}
    </Link>
  );
}
