import { useState } from 'react';
import { MessageCircle, Heart, Maximize2 } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState('');
  const [lbAlt, setLbAlt] = useState('');

  const openMedia = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Heart className="icon-sm" />
            <span>Fotos profissionais para todos</span>
          </div>
          
          <h1 className="hero-title">
            Você <span className="gradient-text">merece</span><br />
            momentos registrados<br />
            com qualidade
          </h1>
          
          <p className="hero-subtitle">
            Oferecemos esse serviço para que todos consigam ter lembranças guardadas com qualidade
            e do jeito que você quiser. Sem precisar sair de casa, nós da IDM, transformamos suas fotos
            simples em momentos inesqueciveis.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Sem sair de casa</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Preço acessível</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Qualidade profissional</span>
            </div>
          </div>
          
          <button className="cta-button" onClick={onCTAClick}>
            <MessageCircle className="icon-md" />
            Transforme suas fotos agora
          </button>

          <p className="hero-note">
            💜 Tornando acessível para todos os públicos
          </p>
        </div>
        
        <div className="hero-visual">
          <div className="image-comparison">
            <div
              className="comparison-card before"
              onClick={() => openMedia(
                '/images/Pri4.jpeg',
                'Foto antes da edição'
              )}
              role="button"
              tabIndex={0}
            >
              <span className="comparison-label">Foto caseira</span>
              <img 
                src="/images/Pri4.jpeg"
                alt="Foto antes da edição"
                style={{ filter: 'brightness(0.85) contrast(0.9)' }}
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    '/images/Pri4.jpeg',
                    'Foto antes da edição'
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            </div>
            <div
              className="comparison-card after"
              onClick={() => openMedia(
                '/images/Pri5.png',
                'Foto depois da edição'
              )}
              role="button"
              tabIndex={0}
            >
              <span className="comparison-label premium">Qualidade profissional</span>
              <img 
                src="/images/Pri5.png"
                alt="Foto depois da edição"
                style={{ filter: 'brightness(1.2) contrast(1.15) saturate(1.3)' }}
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    '/images/Pri5.png',
                    'Foto depois da edição'
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Lightbox open={lbOpen} src={lbSrc} alt={lbAlt} onClose={() => setLbOpen(false)} />

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 24px 80px;
          background: linear-gradient(180deg, #0B0B0B 0%, #0F0F0F 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
          transform: translate(-50%, -20%);
          pointer-events: none;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 50px;
          width: fit-content;
          color: #A78BFA;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-size: 68px;
          font-weight: 800;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -2px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 19px;
          line-height: 1.7;
          color: #9CA3AF;
          margin: 0;
          max-width: 540px;
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 8px 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #D1D5DB;
          font-weight: 500;
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          background: rgba(139, 92, 246, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8B5CF6;
          font-size: 14px;
          font-weight: 700;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 48px rgba(139, 92, 246, 0.4);
        }

        .hero-note {
          font-size: 15px;
          color: #6B7280;
          font-style: italic;
          margin: 0;
        }

        .hero-visual {
          position: relative;
        }

        .image-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .comparison-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #1F1F1F;
          background: #151515;
          transition: all 0.3s ease;
        }

        .comparison-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .comparison-card.after {
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.15);
        }

        .comparison-card img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        .idm-expand {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: #FFFFFF;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(-2px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .comparison-card:hover .idm-expand {
          opacity: 1;
          transform: translateY(0);
        }

        .idm-expand__icon {
          width: 18px;
          height: 18px;
        }

        .comparison-label {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 8px 16px;
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 2;
        }

        .comparison-label.premium {
          background: rgba(139, 92, 246, 0.2);
          color: #A78BFA;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .icon-sm {
          width: 16px;
          height: 16px;
        }

        .icon-md {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .hero-title {
            font-size: 56px;
          }

          .hero-subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 20px 60px;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .image-comparison {
            grid-template-columns: 1fr;
          }

          .comparison-card img {
            height: clamp(220px, 60vw, 300px);
          }

          .hero-features {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
