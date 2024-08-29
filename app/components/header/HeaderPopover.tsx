import {headerAtom} from '~/store/header';
import {Popover, PopoverContent, PopoverTrigger} from '../ui/popover';
import {useAtom} from 'jotai';

export default function HeaderPopover() {
  const [headerKey, setHeaderKey] = useAtom(headerAtom);
  return (
    <Popover open={!!headerKey}>
      <PopoverTrigger />
      <PopoverContent
        className="bg-white/80 backdrop-blur-sm border-green ml-14 border rounded-none"
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
