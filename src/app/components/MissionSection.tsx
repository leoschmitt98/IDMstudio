import { Heart, Users, Sparkles } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-content">
          <div className="section-badge">
            <Heart className="badge-icon" />
            <span>Nossa Missão</span>
          </div>

          <h2 className="section-title">
            Facilitar o acesso<br />
            a fotos <span className="highlight">profissionais</span>
          </h2>

          <p className="section-description">
            Acreditamos que todo mundo merece ter seus momentos mais importantes 
            registrados com qualidade, viemos para trazer essa oportunidade de 
            tranformar fotos simples em momentos inesqueciveis por um preço justo.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon accessibility">
                <Users />
              </div>
              <h3 className="value-title">Acessibilidade</h3>
              <p className="value-description">
                Preços justos para que todos possam ter acesso a fotos de qualidade
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon quality">
                <Sparkles />
              </div>
              <h3 className="value-title">Qualidade</h3>
              <p className="value-description">
                Tecnologia de ponta para resultados dignos de estúdios profissionais
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon heart">
                <Heart />
              </div>
              <h3 className="value-title">Propósito</h3>
              <p className="value-description">
                Preservar memórias preciosas que merecem ser eternizadas
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mission-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #0F0F0F 0%, #0B0B0B 100%);
          position: relative;
          overflow: hidden;
        }

        .mission-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .mission-container {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .mission-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 50px;
          color: #A78BFA;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .badge-icon {
          width: 16px;
          height: 16px;
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -1.5px;
          max-width: 800px;
        }

        .highlight {
          background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 19px;
          line-height: 1.7;
          color: #9CA3AF;
          margin: 0;
          max-width: 720px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          width: 100%;
          margin-top: 32px;
        }

        .value-card {
          padding: 40px 32px;
          background: #151515;
          border: 1px solid #1F1F1F;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
          background: linear-gradient(135deg, #1A1A1A 0%, #141414 100%);
        }

        .value-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .value-icon svg {
          width: 32px;
          height: 32px;
        }

        .value-icon.accessibility {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #3B82F6;
        }

        .value-icon.quality {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: #8B5CF6;
        }

        .value-icon.heart {
          background: rgba(236, 72, 153, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.2);
          color: #EC4899;
        }

        .value-title {
          font-size: 22px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 12px 0;
        }

        .value-description {
          font-size: 15px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .section-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 80px 20px;
          }

          .section-title {
            font-size: 38px;
          }

          .section-description {
            font-size: 17px;
          }

          .value-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
}
