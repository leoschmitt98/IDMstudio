import { useEffect } from 'react';

interface LightboxProps {
  open: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}

const isVideo = (src: string) => {
  const s = src.toLowerCase();
  return s.endsWith('.mp4') || s.endsWith('.webm') || s.endsWith('.ogg');
};

/**
 * Lightbox simples (não altera layout): abre mídia em tela cheia.
 * - Fecha com ESC
 * - Fecha clicando fora
 */
export function Lightbox({ open, src, alt = '', onClose }: LightboxProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="idm-lb__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="idm-lb__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="idm-lb__close" onClick={onClose} aria-label="Fechar" type="button">
          ✕
        </button>

        {isVideo(src) ? (
          <video className="idm-lb__media" src={src} controls autoPlay playsInline />
        ) : (
          <img className="idm-lb__media" src={src} alt={alt} />
        )}
      </div>

      <style>{`
        .idm-lb__overlay{
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .idm-lb__dialog{
          position: relative;
          width: min(1100px, 96vw);
          height: min(82vh, 760px);
          background: rgba(12,12,12,0.96);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .idm-lb__close{
          position: absolute;
          top: 10px;
          right: 10px;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: #fff;
          cursor: pointer;
          font-weight: 900;
        }
        .idm-lb__media{
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
          background: #000;
          display: block;
        }
      `}</style>
    </div>
  );
}
