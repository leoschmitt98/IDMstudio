import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onPrimaryCTAClick: () => void;
  onSecondaryCTAClick: () => void;
}

export function FinalCTA({ onPrimaryCTAClick, onSecondaryCTAClick }: FinalCTAProps) {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Pronto para transformar<br />
            suas imagens?
          </h2>
          <p className="cta-subtitle">
            Entre em contato e descubra como nossa tecnologia de IA pode<br />
            elevar a qualidade das suas fotos para o próximo nível.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={onPrimaryCTAClick}>
              <MessageCircle className="icon" />
              Falar no WhatsApp
            </button>
            <button className="cta-button secondary" onClick={onSecondaryCTAClick}>
              Solicitar orçamento
              <ArrowRight className="icon" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          padding: 160px 24px;
          background: linear-gradient(180deg, #0B0B0B 0%, #0F0F0F 50%, #0B0B0B 100%);
          position: relative;
          overflow: hidden;
        }

        .final-cta-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .final-cta-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 64px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 24px 0;
          line-height: 1.2;
          letter-spacing: -1.5px;
        }

        .cta-subtitle {
          font-size: 20px;
          line-height: 1.7;
          color: #9CA3AF;
          margin: 0 0 48px 0;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 40px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button .icon {
          width: 20px;
          height: 20px;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          color: #FFFFFF;
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.35);
        }

        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 56px rgba(139, 92, 246, 0.45);
        }

        .cta-button.secondary {
          background: rgba(139, 92, 246, 0.1);
          color: #8B5CF6;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .cta-button.secondary:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .final-cta-section {
            padding: 100px 20px;
          }

          .cta-title {
            font-size: 42px;
          }

          .cta-subtitle {
            font-size: 18px;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
