import {useEffect} from 'react';

export function useSetBundleOpen(
  setBundleOpen: (bundleOpen: boolean) => void,
  bundleRef: React.RefObject<HTMLDivElement> | undefined,
) {
  useEffect(() => {
    if (!bundleRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setBundleOpen(!entry.isIntersecting);
      },
      {threshold: 0.1},
    );

    observer.observe(bundleRef.current);

    return () => {
      if (bundleRef.current) {
        observer.unobserve(bundleRef.current);
      }
    };
  }, [bundleRef, setBundleOpen]);
}
