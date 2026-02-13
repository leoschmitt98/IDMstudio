import { ImgHTMLAttributes, useEffect, useRef, useState } from 'react';

const TRANSPARENT_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  rootMargin?: string;
}

export function SmartImage({ src, rootMargin = '120px', ...props }: SmartImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  return <img ref={imageRef} src={shouldLoad ? src : TRANSPARENT_PIXEL} {...props} />;
}
