import { Upload, Wand2, Download } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: 'Envie suas fotos',
      description: 'Carregue as imagens que deseja transformar em nossa plataforma segura.'
    },
    {
      icon: Wand2,
      title: 'IA faz a mágica',
      description: 'Nossa inteligência artificial processa e aprimora suas fotos profissionalmente.'
    },
    {
      icon: Download,
      title: 'Receba em alta qualidade',
      description: 'Baixe suas imagens editadas prontas para uso em até 24 horas.'
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-subtitle">
            Processo simples e rápido em apenas 3 passos
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-icon">
                <step.icon />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          padding: 120px 24px;
          background: #0B0B0B;
          position: relative;
        }

        .how-it-works-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          letter-spacing: -1px;
        }

        .section-subtitle {
          font-size: 20px;
          color: #9CA3AF;
          margin: 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .step-card {
          position: relative;
          padding: 48px 32px;
          background: linear-gradient(135deg, #151515 0%, #0F0F0F 100%);
          border: 1px solid #1F1F1F;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
          background: linear-gradient(135deg, #1A1A1A 0%, #141414 100%);
        }

        .step-number {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 48px;
          font-weight: 800;
          color: rgba(139, 92, 246, 0.1);
          line-height: 1;
        }

        .step-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 16px;
          margin-bottom: 24px;
          color: #8B5CF6;
        }

        .step-icon svg {
          width: 32px;
          height: 32px;
        }

        .step-title {
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 12px 0;
        }

        .step-description {
          font-size: 16px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
        }

        
@media (max-width: 1024px) {
  /* Mantém em colunas (não empilha) */
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .step-card {
    padding: 18px 14px;
    border-radius: 18px;
  }

  .step-number {
    top: 12px;
    right: 12px;
    font-size: 28px;
  }

  .step-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .step-icon svg {
    width: 22px;
    height: 22px;
  }

  .step-title {
    font-size: 14px;
    margin: 0 0 6px 0;
  }

  .step-description {
    font-size: 12px;
    line-height: 1.35;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .section-title {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .how-it-works-section {
    padding: 72px 20px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 34px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  /* Mobile-first: 3 colunas compactas */
  .steps-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .step-card:hover {
    transform: none; /* evita "pulo" no toque */
  }
}

/* Telas muito pequenas: mantém lado a lado (2 colunas) sem cortar */
@media (max-width: 420px) {
  .steps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
          .section-title {
            font-size: 36px;
          }

          .section-header {
            margin-bottom: 48px;
          }
        }
      

/* === HOW IT WORKS GRID (CAROUSEL MOBILE) === */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .steps-grid {
    grid-auto-flow: column;
    grid-auto-columns: 85%;
    grid-template-columns: unset;
    overflow-x: auto;
    gap: 14px;
    padding-bottom: 14px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .step-card {
    scroll-snap-align: start;
  }
}

@media (max-width: 420px) {
  .steps-grid {
    grid-auto-columns: 92%;
  }
}
`}</style>
    </section>
  );
}
