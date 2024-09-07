import {cn} from '~/lib/utils';

export default function SignatureGif({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'shadow-basePink w-full overflow-hidden rounded-none',
        className,
      )}
    >
      <img src="/gifs/gif2.gif" alt="gif" />
    </div>
  );
}
