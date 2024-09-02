import {useEffect} from 'react';

export default function useSetHeaderOpen(
  setHeaderOpen: (open: boolean) => void,
  height: number,
) {
  useEffect(() => {
    setHeaderOpen(true);
  }, [setHeaderOpen, height]);
}
