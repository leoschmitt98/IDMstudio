import { useState } from "react";
import { ShoppingBag, Sparkles, TrendingUp, Users, Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";

interface FashionSectionProps {
  onCTAClick: () => void;
}

export function FashionSection({ onCTAClick }: FashionSectionProps) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");
  const [lbAlt, setLbAlt] = useState("");

  const openMedia = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <section className="fashion-section">
      <div className="fashion-container">
        {/* ===== TEXTO (primeiro) ===== */}
        <div className="section-content">
          <div className="section-badge">
            <ShoppingBag className="badge-icon" />
            <span>Moda & Vitrine IA</span>
          </div>

          <h2 className="section-title">
            Transforme sua loja<br />
            com <span className="highlight">modelos IA</span>
          </h2>

          <p className="section-description">
            Você tem uma loja de roupas mas não pode pagar modelos e fotógrafos profissionais?
            Envie apenas a foto da sua peça e nossa IA veste ela em modelos profissionais
            incríveis. Catálogos de qualidade para pequenos negócios!
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <Sparkles className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">MODELOS GERADAS POR IA</h4>
                <p>Diversas modelos virtuais para vestir suas peças</p>
              </div>
            </div>

            <div className="benefit-item">
              <TrendingUp className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">AUMENTE SUAS VENDAS</h4>
                <p>Vitrines profissionais que convertem mais clientes</p>
              </div>
            </div>

            <div className="benefit-item">
              <Users className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">PARA PEQUENOS NEGÓCIOS</h4>
                <p>Democratizando o acesso a fotos de catálogo profissionais</p>
              </div>
            </div>
          </div>

          
<div className="process-steps mega" aria-label="Como funciona">
  <div className="step-card">
    <div className="step-badge">1</div>
    <div className="step-text">
      <div className="step-title">Envie a foto da roupa</div>
      <div className="step-sub">WhatsApp ou upload — do jeito que você tiver</div>
    </div>
  </div>

  <div className="step-arrow down" aria-hidden="true">↓</div>

  <div className="step-card">
    <div className="step-badge">2</div>
    <div className="step-text">
      <div className="step-title">A IA veste na modelo</div>
      <div className="step-sub">Caimento realista, poses e iluminação de catálogo</div>
    </div>
  </div>

  <div className="step-arrow down" aria-hidden="true">↓</div>

  <div className="step-card pulse">
    <div className="step-badge">3</div>
    <div className="step-text">
      <div className="step-title">Receba suas roupas com <span className="highlight">VIDA</span> em nossas modelos</div>
      <div className="step-sub">Fotos + variações, prontas para vender e postar</div>
    </div>
    <span className="step-spark" aria-hidden="true">✨</span>
  </div>
</div>

<p className="section-note">
             • Plano Fashion: R$ 200/mês com direito a 50 fotos
          </p>
        </div>

        {/* ===== VISUAL + BOTÃO ABAIXO (igual Gestante/Pets) ===== */}
        <div className="section-visual">
          <div className="gallery-grid">
            <div
              className="gallery-image main"
              onClick={() =>
                openMedia(
                  "/images/video2.mp4",
                  "Modelo IA com roupa"
                )
              }
              role="button"
              tabIndex={0}
            >
              <video
               src="/images/video2.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Ensaio gestante profissional"
              />

              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/video2.mp4",
                    "Modelo IA com roupa"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <div className="image-overlay">
                <span className="overlay-label">Modelo gerada por IA</span>
              </div>
            </div>

            <div
              className="gallery-image secondary"
              onClick={() =>
                openMedia(
                  "/images/roupa.png",
                  "Detalhe da roupa"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/roupa.png"
                alt="Detalhe da roupa"
                style={{ filter: "brightness(1.1)" }}
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/roupa.png",
                    "Detalhe da roupa"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            </div>

            <div
              className="gallery-image secondary"
              onClick={() =>
                openMedia(
                  "/images/modelo3.jpg",
                  "Modelo em pose"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/modelo3.jpg"
                alt="Modelo em pose"
                style={{ filter: "saturate(1.2)" }}
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/modelo3.jpg",
                    "Modelo em pose"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            </div>
          </div>

          {/* BOTÃO ABAIXO DAS FOTOS */}
           <button type="button" className="idm-cta" onClick={onCTAClick}>
            Quero meu plano Fashion
          </button>
        </div>
      </div>

      <Lightbox open={lbOpen} src={lbSrc} alt={lbAlt} onClose={() => setLbOpen(false)} />

      <style>{`
        .fashion-section {
          padding: 120px 24px;
          background: #0B0B0B;
          position: relative;
          overflow: hidden;
        }

        .fashion-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .fashion-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .section-visual {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cta-below {
          align-self: flex-start;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 16px;
        }

        .gallery-image {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #1F1F1F;
          background: #151515;
          transition: all 0.3s ease;
          cursor: zoom-in;
        }

        .gallery-image:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
        }

        .gallery-image.main {
          grid-row: span 2;
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gallery-image.main img {
          height: 500px;
        }

        .gallery-image.secondary img {
          height: 240px;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: linear-gradient(to top, rgba(11, 11, 11, 0.9), transparent);
        }

        .overlay-label {
          font-size: 13px;
          font-weight: 600;
          color: #A78BFA;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .idm-expand {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.35);
          color: #FFFFFF;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0.92;
          transition: all 0.2s ease;
          z-index: 3;
        }

        .gallery-image:hover .idm-expand {
          opacity: 1;
          transform: translateY(-1px);
        }

        .idm-expand__icon {
          width: 18px;
          height: 18px;
        }

        /* ===== FIX MOBILE (igual Gestante/Pets) ===== */
        
/* === PROCESSO (MAX CHAMATIVO + MOBILE FIRST) === */
.process-steps.mega{
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 18px;
  border-radius: 22px;
  border: 1px solid rgba(168,85,247,0.25);
  background: linear-gradient(135deg, rgba(139,92,246,0.16), rgba(168,85,247,0.08));
  box-shadow: 0 18px 60px rgba(0,0,0,0.35);
  backdrop-filter: blur(6px);
  position: relative;
  overflow: hidden;
}

.process-steps.mega::before{
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle at 30% 30%, rgba(168,85,247,0.25), rgba(0,0,0,0) 55%);
  animation: processGlow 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes processGlow{
  0% { transform: translate3d(-6%, -6%, 0) scale(1); opacity: 0.7; }
  50% { transform: translate3d(6%, 6%, 0) scale(1.05); opacity: 1; }
  100% { transform: translate3d(-6%, -6%, 0) scale(1); opacity: 0.7; }
}

.step-card{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.28);
  position: relative;
  z-index: 1;
}

.step-badge{
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  box-shadow: 0 0 18px rgba(168,85,247,0.45);
  flex: 0 0 auto;
}

.step-text{ display: flex; flex-direction: column; gap: 2px; }
.step-title{
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.2px;
}
.step-sub{
  font-size: 12px;
  color: rgba(255,255,255,0.72);
  line-height: 1.25;
}

.step-arrow.down{
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 18px;
  color: rgba(168,85,247,0.95);
  z-index: 1;
  animation: arrowBounce 1.8s ease-in-out infinite;
  user-select: none;
}

@keyframes arrowBounce{
  0%, 100% { transform: translateY(0); opacity: 0.75; }
  50% { transform: translateY(6px); opacity: 1; }
}

.step-card.pulse{
  border: 1px solid rgba(168,85,247,0.28);
  background: rgba(0,0,0,0.32);
}

.step-spark{
  position: absolute;
  right: 12px;
  top: 10px;
  font-size: 16px;
  filter: drop-shadow(0 0 10px rgba(168,85,247,0.55));
  z-index: 2;
}

/* Desktop: mantém vertical (como pedido), mas limita largura pra ficar "bloco" premium */
@media (min-width: 1025px){
  .process-steps.mega{
    max-width: 520px;
  }
}

@media (max-width: 1024px) {
          .fashion-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .section-content { grid-row: 1; }
          .section-visual { grid-row: 2; }

          .section-title { font-size: 48px; }
        }

        @media (max-width: 768px) {
          .fashion-section {
            padding: 80px 20px;
          }

          .section-title { font-size: 38px; }
          .section-description { font-size: 16px; }

          .process-steps {
            flex-direction: column;
            gap: 12px;
          }

          .step-arrow {
            transform: rotate(90deg);
          }

          .gallery-image.main img { height: 400px; }
          .gallery-image.secondary img { height: 200px; }
        }
      `}</style>
    </section>
  );
}
