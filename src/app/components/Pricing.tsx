import { Check } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      name: '1 Foto',
      price: 'R$ 10',
      period: '/pacote',
      features: [
        '1 foto editada com IA',
        'Entrega digital',
        'Ideal para teste rápido',
      ],
      highlighted: false
    },
    {
      name: '3 Fotos',
      price: 'R$ 25',
      period: '/pacote',
      features: [
        '3 fotos editadas com IA',
        'Custo-benefício para lembranças',
        'Entrega digital',
      ],
      highlighted: false
    },
    {
      name: '10 Fotos',
      price: 'R$ 80',
      period: '/pacote',
      features: [
        '10 fotos editadas com IA',
        'Melhor valor por foto',
        'Entrega digital',
      ],
      highlighted: true
    },
    {
      name: 'Fashion Mensal',
      price: 'R$ 200',
      period: '/mês',
      features: [
        'Até 50 fotos por mês',
        'Foco em moda e vitrine IA',
        'Ideal para lojas e catálogos',
      ],
      highlighted: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Escolha seu plano</h2>
          <p className="section-subtitle">
Valores simples para você escolher o melhor plano
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="pricing-badge">Mais Popular</div>}
              
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                  {plan.period && <span className="pricing-period">{plan.period}</span>}
                </div>
              </div>

              <div className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="pricing-feature">
                    <Check className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`pricing-button ${plan.highlighted ? 'primary' : 'secondary'}`}
                onClick={() => onSelectPlan(plan.name)}
              >
                Selecionar plano
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-section {
          padding: 120px 24px;
          background: linear-gradient(180deg, #0F0F0F 0%, #0B0B0B 100%);
        }

        .pricing-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-top: 64px;
        }

        .pricing-card {
          position: relative;
          padding: 40px;
          background: #151515;
          border: 1px solid #1F1F1F;
          border-radius: 20px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .pricing-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-6px);
        }

        .pricing-card.highlighted {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, #151515 100%);
          border-color: rgba(139, 92, 246, 0.4);
          transform: scale(1.05);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
        }

        .pricing-card.highlighted:hover {
          transform: scale(1.05) translateY(-6px);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 20px;
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          color: #FFFFFF;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pricing-header {
          margin-bottom: 32px;
        }

        .pricing-name {
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 16px 0;
        }

        .pricing-price {
          font-size: 48px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }

        .pricing-period {
          font-size: 18px;
          font-weight: 500;
          color: #9CA3AF;
          margin-left: 4px;
        }

        .pricing-features {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #D1D5DB;
          font-size: 15px;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          color: #8B5CF6;
          flex-shrink: 0;
        }

        .pricing-button {
          width: 100%;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pricing-button.primary {
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          color: #FFFFFF;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
        }

        .pricing-button.primary:hover {
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }

        .pricing-button.secondary {
          background: rgba(139, 92, 246, 0.1);
          color: #8B5CF6;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .pricing-button.secondary:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.3);
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card.highlighted {
            transform: scale(1);
          }

          .pricing-card.highlighted:hover {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 80px 20px;
          }

          .pricing-card {
            padding: 32px 24px;
          }

          .pricing-price {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}
