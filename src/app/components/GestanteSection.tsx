import { useState } from "react";
import { Heart, Sparkles, Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";
import { SmartImage } from "./SmartImage";

interface GestanteSectionProps {
  onCTAClick: () => void;
}

export function GestanteSection({ onCTAClick }: GestanteSectionProps) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");
  const [lbAlt, setLbAlt] = useState("");

  const openMedia = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <section className="gestante-section">
      <div className="gestante-container">
        {/* ===== TEXTO (mesma hierarquia do ChildrenSection) ===== */}
        <div className="section-content">
          <div className="section-badge">
            <Heart className="badge-icon" />
            <span>Ensaio de Gestante</span>
          </div>

          <h2 className="section-title">
            Eternize a espera do seu <br />
            <span className="highlight">maior amor</span>
          </h2>

          <p className="section-description">
            A gravidez é um dos momentos mais especiais da vida. Você merece ter essas memórias
            registradas com toda beleza e delicadeza que esse período único merece, sem precisar
            gastar fortunas em estúdios fotográficos. Isso tudo com valores que cabem no seu bolso.
          </p>

          <ul className="benefits-list">
            <li className="benefit-item">
              <Sparkles className="benefit-icon" />
              <span className="highlight">QUALIDADE DE ESTÚDIO EM UMA FOTO SIMPLES</span>
            </li>
            <li className="benefit-item">
              <Sparkles className="benefit-icon" />
              <span className="highlight">ILUMINAÇÃO, TONS E ÂNGULOS AJUSTADOS COM CUIDADO</span>
            </li>
            <li className="benefit-item">
              <Sparkles className="benefit-icon" />
              <span className="highlight">RESULTADO PRONTO PARA GUARDAR E COMPARTILHAR</span>
            </li>
            <li className="benefit-item">
              <Sparkles className="benefit-icon" />
              <span className="highlight">VOCê ESCOLHE O TEMA DO ENSAIO SEM SAIR DE CASA</span> 
            </li>
          </ul>
        </div>

        {/* ===== VISUAL + BOTÃO ===== */}
        <div className="section-visual">
          <div className="gallery-grid">
            {/* PRINCIPAL – VÍDEO */}
            <div
              className="gallery-image main"
              onClick={() => openMedia("/images/PriVideo.mp4", "Ensaio gestante (vídeo)")}
              role="button"
              tabIndex={0}
            >
              <video
                src="/images/PriVideo.mp4"
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
                  openMedia("/images/PriVideo.mp4", "Ensaio gestante (vídeo)");
                }}
                aria-label="Expandir vídeo"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <div className="image-overlay">
                <span className="overlay-label">QUALIDADE PROFISSIONAL</span>
              </div>
            </div>

            {/* SECUNDÁRIA ESQUERDA – ANTES */}
            <div
              className="gallery-image secondary"
              onClick={() => openMedia("/images/Pri3.jpeg", "Antes")}
              role="button"
              tabIndex={0}
            >
              <SmartImage src="/images/Pri3.jpeg" alt="Antes" loading="lazy" fetchPriority="low" decoding="async" />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia("/images/Pri3.jpeg", "Antes");
                }}
                aria-label="Expandir imagem (Antes)"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <span className="compare-badge compare-before">Antes</span>
            </div>

            {/* SECUNDÁRIA DIREITA – DEPOIS */}
            <div
              className="gallery-image secondary"
              onClick={() => openMedia("/images/PriImagem1.png", "Depois")}
              role="button"
              tabIndex={0}
            >
              <SmartImage src="/images/PriImagem1.png" alt="Depois" loading="lazy" fetchPriority="low" decoding="async" />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia("/images/PriImagem1.png", "Depois");
                }}
                aria-label="Expandir imagem (Depois)"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <span className="compare-badge compare-after">Depois</span>
            </div>
          </div>

          <button type="button" className="idm-cta" onClick={onCTAClick}>
            Quero meu ensaio de gestante
          </button>
        </div>
      </div>

      <Lightbox open={lbOpen} src={lbSrc} alt={lbAlt} onClose={() => setLbOpen(false)} />

      {/* ===== ESTILOS (só o necessário para CENTRALIZAR igual as outras) ===== */}
      <style>{`
        .gestante-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #0F0F0F 0%, #0B0B0B 100%);
        }
          html, body {
          width: 100%;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }


        .gestante-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .gestante-container {
            grid-template-columns: 1fr;
          }

          .section-content {
            grid-row: 1;
          }

          .section-visual {
            grid-row: 2;
          }
        }

        /* badges Antes/Depois sem mexer no layout */
        .gallery-image.secondary { position: relative; }

        .compare-badge{
          position: absolute;
          left: 12px;
          bottom: 12px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .4px;
          pointer-events: none;
          user-select: none;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(0,0,0,0.45);
          color: #fff;
          backdrop-filter: blur(6px);
        }

        .compare-after{
          background: linear-gradient(135deg, rgba(139,92,246,0.92), rgba(168,85,247,0.92));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 0 12px rgba(168,85,247,0.35);
          color: #fff;
        }
          .idm-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  padding: 14px 28px;

  font-size: 15px;
  font-weight: 600;
  color: #ffffff;

  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  border: none;
  border-radius: 999px;

  cursor: pointer;
  text-decoration: none;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.idm-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(168, 85, 247, 0.35);
}

.idm-cta:active {
  transform: translateY(0);
  box-shadow: 0 6px 18px rgba(168, 85, 247, 0.25);
}

      `}</style>
    </section>
  );
}

export default GestanteSection;
