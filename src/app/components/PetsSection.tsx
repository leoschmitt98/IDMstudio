import { useState } from "react";
import { Dog, Heart, Camera, Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";
import { SmartImage } from "./SmartImage";

interface PetsSectionProps {
  onCTAClick: () => void;
}

export function PetsSection({ onCTAClick }: PetsSectionProps) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");
  const [lbAlt, setLbAlt] = useState("");

  const openMedia = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <section className="pets-section">
      <div className="pets-container">
        {/* ===== TEXTO ===== */}
        <div className="section-content">
          <div className="section-badge">
            <Dog className="badge-icon" />
            <span>Ensaio de Pets</span>
          </div>

          <h2 className="section-title">
            Seu pet também <br />
            merece ser <span className="highlight">estrela</span>
          </h2>

          <p className="section-description">
            Seu melhor amigo de quatro patas faz parte da família e merece ter
            suas melhores fotos! Ensaios profissionais para pets costumam custar
            muito caro. Com a IDM, você tem qualidade profissional por um preço justo.
            Não podemos voltar no tempo, mas podemos através de uma foto simples
            de um amiguinho que ja se foi, fazer dessa foto um momento especial para 
            você guardar de recordação.
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <Heart className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">SEM ESTRESSE PARA O PET</h4>
                <p>Fotos no ambiente onde ele se sente seguro e feliz</p>
              </div>
            </div>

            <div className="benefit-item">
              <Camera className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">QUALIDADE DE ESTÚDIO</h4>
                <p>Fundos profissionais, iluminação e cores aprimoradas</p>
              </div>
            </div>

            <div className="benefit-item">
              <Dog className="benefit-icon" />
              <div className="benefit-content">
                <h4 className="highlight">PARA TODOS OS PETS</h4>
                <p>Cães, gatos e outros animais de estimação</p>
              </div>
            </div>
          </div>

          <p className="section-note">
            • Perfeito para presentear também
          </p>
        </div>

        {/* ===== VISUAL + BOTÃO ABAIXO ===== */}
        <div className="section-visual">
          <div className="gallery-grid">
            {/* PRINCIPAL */}
            <div
              className="gallery-image main"
              onClick={() =>
                openMedia(
                  "/images/dadaEthor3.png",
                  "Ensaio pet profissional"
                )
              }
              role="button"
              tabIndex={0}
            >
              <SmartImage
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/dadaEthor3.png"
                alt="Ensaio de pet profissional"
               />

              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/dadaEthor3.png",
                    "Ensaio pet profissional"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>

              <div className="image-overlay">
                <span className="overlay-label">Qualidade incrível</span>
              </div>
            </div>

            {/* SECUNDÁRIAS */}
            <div
              className="gallery-image secondary"
              onClick={() =>
                openMedia(
                  "/images/dadaEthor.jpeg",
                  "Detalhe do pet"
                )
              }
              role="button"
              tabIndex={0}
            >
              <SmartImage
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/dadaEthor.jpeg"
                alt="Pet feliz"
                style={{ filter: "brightness(1.1)" }}
               />

              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/dadaEthor.jpeg",
                    "Detalhe do pet"
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
                  "/images/dadaEthor2.png",
                  "Pet em pose"
                )
              }
              role="button"
              tabIndex={0}
            >
              <SmartImage
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                src="/images/dadaEthor2.png"
                alt="Pet brincando"
                style={{ filter: "saturate(1.25)" }}
               />

              <button
                type="button"
                className="idm-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  openMedia(
                    "/images/dadaEthor2.png",
                    "Pet em pose"
                  );
                }}
                aria-label="Expandir imagem"
              >
                <Maximize2 className="idm-expand__icon" />
              </button>
            
              <span className="compare-badge compare-after">Depois</span>
            </div>
          </div>

          {/* BOTÃO ABAIXO DAS FOTOS (igual Gestante) */}
          <button type="button" className="idm-cta" onClick={onCTAClick}>
            Quero edição em foto de pet
          </button>
        </div>
      </div>

      <Lightbox open={lbOpen} src={lbSrc} alt={lbAlt} onClose={() => setLbOpen(false)} />

      <style>{`
        .pets-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #0B0B0B 0%, #0F0F0F 100%);
          position: relative;
          overflow: hidden;
        }

        .pets-section::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .pets-container {
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
        }

        .gallery-image:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 158, 11, 0.3);
          box-shadow: 0 12px 40px rgba(245, 158, 11, 0.15);
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

        .idm-expand {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.35);
          color: #FFFFFF;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0.0;
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

        /* ===== FIX MOBILE: texto primeiro, galeria depois ===== */
        @media (max-width: 1024px) {
          .pets-container {
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
          .pets-section {
            padding: 80px 20px;
          }

          .gallery-image.main img {
            height: 400px;
          }

          .gallery-image.secondary img {
            height: 200px;
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
