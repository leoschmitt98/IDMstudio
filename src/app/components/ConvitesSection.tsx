import { useState } from "react";
import { PartyPopper, Sparkles, Image as ImageIcon, Send, Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";

interface ConvitesSectionProps {
  onCTAClick: () => void;
}

export function ConvitesSection({ onCTAClick }: ConvitesSectionProps) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");
  const [lbAlt, setLbAlt] = useState("");

  const openMedia = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <section className="convites-section">
      <div className="convites-container">
        {/* ===== TEXTO ===== */}
        <div className="section-content">
          <div className="section-badge">
            <PartyPopper className="badge-icon" />
            <span>Convites Temáticos</span>
          </div>

          <h2 className="section-title">
            Uma foto simples vira um
            <br />
            convite <span className="highlight">mágico</span>
          </h2>

          <p className="section-description">
            Mande uma foto qualquer da criança e diga qual tema ela ama.
            A IDM cria a fantasia com inteligência artificial e transforma tudo em um convite
            temático infantil cheio de cor, diversão e imaginação.
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <ImageIcon className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">VOCÊ ENVIA UMA FOTO</h4>
                <p>Foto simples, em casa mesmo (sem estúdio e sem fantasia)</p>
              </div>
            </div>

            <div className="benefit-item">
              <Sparkles className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">ESCOLHE O TEMA</h4>
                <p>Dinossauro, princesa, super-herói, unicórnio, futebol… o que quiser</p>
              </div>
            </div>

            <div className="benefit-item">
              <Send className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">RECEBE PRONTO</h4>
                <p>Imagem da criança no tema + convite digital para WhatsApp e impressão</p>
              </div>
            </div>
          </div>

          <p className="section-note">
            • Perfeito para aniversários e festas tematicas
          </p>
        </div>

        {/* ===== VISUAL + BOTÃO EXPANDIR ===== */}
        <div className="section-visual">
          <div className="gallery-grid">
            {/* PRINCIPAL */}
            <div
              className="gallery-image main"
              onClick={() =>
                openMedia(
                  "/images/bento1.png",
                  "Convite temático infantil"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                src="/images/bento1.png"
                alt="Convite temático infantil"
              />

              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/bento1.png",
                    "Convite temático infantil"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <div className="image-overlay">
                <span className="overlay-label">Do tema ao convite</span>
              </div>
            </div>

            {/* SECUNDÁRIAS */}
            <div
              className="gallery-image secondary"
              onClick={() =>
                openMedia(
                  "/images/bento.jpeg",
                  "Criança com tema"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                src="/images/bento.jpeg"
                alt="Criança com tema"
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/bento.jpeg",
                    "Criança com tema"
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
                openMedia(
                  "/images/bento2.png",
                  "Festa infantil temática"
                )
              }
              role="button"
              tabIndex={0}
            >
              <img
                src="/images/bento2.png"
                alt="Festa infantil temática"
              />
              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/bento2.png",
                    "Festa infantil temática"
                  );
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
            Quero um convite tematico
          </button>
        </div>
      </div>

      <Lightbox open={lbOpen} src={lbSrc} alt={lbAlt} onClose={() => setLbOpen(false)} />

      <style>{`
        .convites-section {
          padding: 120px 24px;
          background: #0B0B0B;
        }

        .convites-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 80px;
          align-items: center;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .gallery-image {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .gallery-image:hover img {
          transform: scale(1.03);
        }

        .gallery-image.main {
          grid-column: 1 / -1;
        }

        .gallery-image.main img {
          height: 420px;
        }

        .gallery-image.secondary img {
          height: 200px;
        }

        .idm-expand {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(0,0,0,0.45);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(2px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 3;
        }

        .gallery-image:hover .idm-expand {
          opacity: 1;
          transform: translateY(0);
        }

        .idm-expand__icon {
          width: 18px;
          height: 18px;
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
          color: #FCD34D;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Mobile: texto primeiro, galeria depois */
        @media (max-width: 1024px) {
          .convites-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .section-content {
            grid-row: 1;
          }
          .section-visual {
            grid-row: 2;
          }
        }

        @media (max-width: 768px) {
          .convites-section {
            padding: 80px 20px;
          }
          .gallery-image.main img {
            height: clamp(260px, 74vw, 400px);
          }
          .gallery-image.secondary img {
            height: clamp(140px, 38vw, 200px);
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
