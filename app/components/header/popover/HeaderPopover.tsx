import {headerAtom} from '~/store/header';
import {useAtom} from 'jotai';
import {Popover, PopoverContent, PopoverTrigger} from '~/components/ui/popover';
import HeaderPopoverContent from './HeaderPopoverContent';

export default function HeaderPopover() {
  const [headerKey, setHeaderKey] = useAtom(headerAtom);
  return (
    <Popover open={!!headerKey}>
      <PopoverTrigger />
      <PopoverContent
        className="bg-white/80 backdrop-blur-sm border-sand ml-14 md:block hidden overflow-hidden border rounded-none"
        style={{width: 'calc(100vw - 112px)'}}
        side="bottom"
        sideOffset={28}
        onMouseLeave={() => setHeaderKey(null)}
      >
        <HeaderPopoverContent />
      </PopoverContent>
    </Popover>
  );
}
