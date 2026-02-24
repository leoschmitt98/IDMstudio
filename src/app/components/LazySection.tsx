import { ReactNode, useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: ReactNode;
  rootMargin?: string;
}

export function LazySection({ children, rootMargin = '800px' }: LazySectionProps) {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = anchorRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <>
      <div ref={anchorRef} aria-hidden="true" style={{ width: 1, height: 1 }} />
      {shouldRender ? children : null}
    </>
  );
}
