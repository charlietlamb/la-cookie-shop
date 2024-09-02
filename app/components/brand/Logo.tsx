import {cn} from '~/lib/utils';

export default function Logo({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'font-silk text-dark flex flex-col items-center justify-center',
        className,
      )}
    >
      <p className="whitespace-nowrap h3-size font-medium leading-none">
        La Cookie Shop
      </p>
      <p className="p-size italilc -mt-2 leading-none">Lisbon</p>
    </div>
  );
}
