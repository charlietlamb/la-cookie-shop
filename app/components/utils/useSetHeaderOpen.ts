import {useEffect} from 'react';

export default function useSetHeaderOpen(
  setHeaderOpen: (open: boolean) => void,
  height: number,
) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeaderOpen(true);
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [setHeaderOpen, height]);
}
