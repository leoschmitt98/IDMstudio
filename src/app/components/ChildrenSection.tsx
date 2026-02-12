import { useState } from "react";
import { Baby, Smile, Gift, Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";

interface ChildrenSectionProps {
  onCTAClick: () => void;
}

export function ChildrenSection({ onCTAClick }: ChildrenSectionProps) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");
  const [lbAlt, setLbAlt] = useState("");
  const childrenAfterCandidates = ["/images/gui2.png", "/images/gui2.jpeg", "/images/gui2.jpg"] as const;
  const [childrenAfterSrcIndex, setChildrenAfterSrcIndex] = useState(0);
  const childrenAfterSrc = childrenAfterCandidates[childrenAfterSrcIndex];

  const handleChildrenAfterError = () => {
    setChildrenAfterSrcIndex((prev) =>
      prev < childrenAfterCandidates.length - 1 ? prev + 1 : prev
    );
  };

  const openMedia = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <section className="children-section">
      <div className="children-container">

        {/* ===== TEXTO ===== */}
        <div className="section-content">
          <div className="section-badge">
            <Baby className="badge-icon" />
            <span>Ensaios Infantis</span>
          </div>

          <h2 className="section-title">
            Cada sorriso do seu filho <br />
            merece ser <span className="highlight">eternizado</span>
          </h2>

          <p className="section-description">
            As crianças crescem rápido demais. Registre cada fase com imagens
            profissionais, cheias de emoção e carinho, sem sair de casa.
            Também fazemos fotos temáticas perfeitas para álbuns.
          </p>

          <ul className="benefits-list">
            <li className="benefit-item">
              <Smile className="benefit-icon" />
              <span className="highlight">EXPRESSÕES NATURAIS E ESPONTÂNEAS</span>
            </li>
            <li className="benefit-item">
              <Gift className="benefit-icon" />
              <span className="highlight">PERFEITO PARA PRESENTES E RECORDAÇÕES</span>
            </li>
          </ul>
        </div>

        {/* ===== VISUAL + BOTÃO ===== */}
        <div className="section-visual">
          <div className="gallery-grid">

            {/* PRINCIPAL */}
            <div
              className="gallery-image main"
              onClick={() =>
                openMedia(
                  "/images/gui1.png",
                  "Ensaio infantil profissional"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/gui1.png"
                alt="Ensaio infantil profissional"
              />

              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/gui1.png",
                    "Ensaio infantil profissional"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <div className="image-overlay">
                <span className="overlay-label">Momentos inesquecíveis</span>
              </div>
            </div>

            {/* SECUNDÁRIAS */}
            <div
              className="gallery-image secondary"
              onClick={() =>
                openMedia(
                  "/images/gui4.jpeg",
                  "Criança sorrindo"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/gui4.jpeg"
                alt="Criança sorrindo"
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/gui4.jpeg",
                    "Criança sorrindo"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            
              <span className="compare-badge compare-before">Antes</span>
            </div>

            <div
              className="gallery-image secondary"
              onClick={() =>
                openMedia(childrenAfterSrc, "Ensaio infantil")
              }
              role="button"
              tabIndex={0}
            >
              <img
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src={childrenAfterSrc}
                alt="Ensaio infantil"
                onError={handleChildrenAfterError}
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(childrenAfterSrc, "Ensaio infantil");
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            
              <span className="compare-badge compare-after">Depois</span>
            </div>
          </div>

          {/* BOTÃO ABAIXO DAS FOTOS */}
          <button type="button" className="idm-cta" onClick={onCTAClick}>
            Quero edição em foto de criança
          </button>
        </div>
      </div>

      <Lightbox
        open={lbOpen}
        src={lbSrc}
        alt={lbAlt}
        onClose={() => setLbOpen(false)}
      />

      {/* ===== ESTILOS (IGUAL GESTANTE) ===== */}
      <style>{`
        .children-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #0F0F0F 0%, #0B0B0B 100%);
        }
          .benefit-item span {
            color: #D1D5DB;
          }


        .children-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .children-container {
            grid-template-columns: 1fr;
          }

          .section-content {
            grid-row: 1;
          }

          .section-visual {
            grid-row: 2;
          }
        }
          .gallery-image.secondary{ position: relative; }
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
`}</style>
    </section>
  );
}
