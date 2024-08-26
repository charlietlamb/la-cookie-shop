import {headerAtom} from '~/store/header';
import {Popover, PopoverContent, PopoverTrigger} from '../ui/popover';
import {useAtom} from 'jotai';
import {useEffect} from 'react';

export default function HeaderPopover() {
  const [headerKey, setHeaderKey] = useAtom(headerAtom);
  useEffect(() => {
    console.log(headerKey);
    console.log(!!headerKey);
  }, [headerKey]);
  return (
    <Popover open={!!headerKey}>
      <PopoverTrigger />
      <PopoverContent
        className="bg-white/80 backdrop-blur-sm border-sand ml-14 border rounded-none"
        style={{width: 'calc(100vw - 112px)'}}
        side="bottom"
        sideOffset={28}
        onMouseLeave={() => setHeaderKey(null)}
      >
        hi
      </PopoverContent>
    </Popover>
  );
}
