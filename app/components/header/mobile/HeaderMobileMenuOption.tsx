import {Link} from '@remix-run/react';
import {useSetAtom} from 'jotai';
import {ChevronRightIcon} from 'lucide-react';
import {cn} from '~/lib/utils';
import {headerAtom} from '~/store/header';

export default function HeaderMobileMenuOption({
  to,
  link = true,
  children,
}: {
  to: string;
  link?: boolean;
  children: React.ReactNode;
}) {
  const setHeader = useSetAtom(headerAtom);
  const className = 'font-cardo w-full text-lg uppercase';
  return link ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <div
      className={cn(
        'flex items-center justify-between w-full cursor-pointer',
        className,
      )}
      onClick={() => setHeader(to)}
    >
      {children}
      <ChevronRightIcon className="w-4 h-4" />
    </div>
  );
}
