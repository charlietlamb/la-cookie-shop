import {cn} from '~/lib/utils';

export default function Logo({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'font-cardo text-dark flex flex-col items-center justify-center w-40',
        className,
      )}
    >
      <img src="/logo/logoT.png" alt="La Cookie Shop Logo" className="pt-1" />
    </div>
  );
}
