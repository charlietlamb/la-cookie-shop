import {Cookie} from 'lucide-react';
import {cn} from '~/lib/utils';

export default function NextSeason() {
  return (
    <div className="md:grid-cols-5 grid grid-cols-6">
      {Array.from({length: 5}).map((_, index) => (
        <div
          className={cn(
            'flex flex-col items-center justify-center w-full h-full col-span-2 md:col-span-1',
            index > 2 && 'col-span-3',
          )}
        >
          <Cookie key={index} className="w-20 h-20" strokeWidth={1} />
          <p className="font-silk text-xl">??</p>
        </div>
      ))}
    </div>
  );
}
