import {LoaderCircle} from 'lucide-react';
import {cn} from '~/lib/utils';

export default function Loading({className}: {className?: string}) {
  return (
    <LoaderCircle strokeWidth={1} className={cn('animate-spin', className)} />
  );
}
