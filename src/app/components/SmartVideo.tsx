import { VideoHTMLAttributes, useEffect, useRef, useState } from 'react';

interface SmartVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  rootMargin?: string;
}

export function SmartVideo({ src, rootMargin = '240px', preload = 'none', ...props }: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
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

  return <video ref={videoRef} src={shouldLoad ? src : undefined} preload={preload} {...props} />;
}
