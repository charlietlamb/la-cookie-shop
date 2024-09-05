import {Cookie} from 'lucide-react';

export default function NextSeason() {
  return (
    <div className="md:grid-cols-5 grid grid-cols-1">
      {Array.from({length: 5}).map((_, index) => (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Cookie key={index} className="w-20 h-20" strokeWidth={1} />
          <p className="font-silk text-xl">??</p>
        </div>
      ))}
    </div>
  );
}
