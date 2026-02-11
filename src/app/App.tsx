import { useMemo, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { GestanteSection } from './components/GestanteSection';
import { ChildrenSection } from './components/ChildrenSection';
import { PetsSection } from './components/PetsSection';
import { ConvitesSection } from './components/ConvitesSection';
import { FashionSection } from './components/FashionSection';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { buildWhatsappMessageUrl, getWhatsAppNumber } from './whatsapp';
import { appendCampaignContext, getUtmContext, trackCtaClick } from './marketing';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = getWhatsAppNumber(import.meta.env.VITE_WHATSAPP_NUMBER);

  const navItems = [
    { href: '#gestante', label: 'Gestante' },
    { href: '#criancas', label: 'Crianças' },
    { href: '#convites', label: 'Convites' },
    { href: '#pets', label: 'Pets' },
    { href: '#moda', label: 'Moda' },
    { href: '#precos', label: 'Preços' },
  ];

  const utmContext = useMemo(
    () => getUtmContext(window.location.search),
    []
  );

  const openWhatsApp = ({
    ctaId,
    service,
    message,
  }: {
    ctaId: string;
    service: string;
    message: string;
  }) => {
    const enrichedMessage = appendCampaignContext(message, utmContext);

    trackCtaClick({
      ctaId,
      service,
      message: enrichedMessage,
      utmContext,
    });

    window.open(buildWhatsappMessageUrl(whatsappNumber, enrichedMessage), '_blank');
  };

  const handleHeroCTAClick = () => {
    openWhatsApp({
      ctaId: 'hero_transformar_fotos',
      service: 'geral',
      message: 'Olá! Quero transformar minhas fotos com o IDM Studio IA. Pode me explicar como funciona?',
    });
  };

  const handleGestanteCTAClick = () => {
    openWhatsApp({
      ctaId: 'gestante_cta',
      service: 'gestante',
      message: 'Olá! Estou interessada no ensaio de gestante.',
    });
  };

  const handleChildrenCTAClick = () => {
    openWhatsApp({
      ctaId: 'children_cta',
      service: 'infantil',
      message: 'Olá! Estou interessada na edição de fotos infantis.',
    });
  };

  const handleConvitesCTAClick = () => {
    openWhatsApp({
      ctaId: 'convites_cta',
      service: 'convites',
      message: 'Olá! Estou interessada em convites temáticos personalizados.',
    });
  };

  const handlePetsCTAClick = () => {
    openWhatsApp({
      ctaId: 'pets_cta',
      service: 'pets',
      message: 'Olá! Estou interessada no ensaio de pets.',
    });
  };

  const handleFashionCTAClick = () => {
    openWhatsApp({
      ctaId: 'fashion_cta',
      service: 'moda_vitrine_ia',
      message: 'Olá! Estou interessada no serviço de moda e vitrine com IA.',
    });
  };

  const handleFinalPrimaryCTAClick = () => {
    openWhatsApp({
      ctaId: 'final_cta_primary',
      service: 'geral',
      message: 'Olá! Quero falar no WhatsApp e entender qual serviço combina comigo.',
    });
  };

  const handleFinalSecondaryCTAClick = () => {
    openWhatsApp({
      ctaId: 'final_cta_secondary',
      service: 'orcamento',
      message: 'Olá! Quero solicitar um orçamento.',
    });
  };

  const handleSelectPlan = (plan: string) => {
    openWhatsApp({
      ctaId: `pricing_plan_${plan.toLowerCase()}`,
      service: 'planos',
      message: `Olá! Tenho interesse no plano ${plan}.`,
    });
  };
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">IDM</div>
            <div className="logo-text">Studio IA</div>
          </div>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="nav-menu-toggle"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={`mobile-${item.href}`}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Landing Page Sections */}
      <HeroSection onCTAClick={handleHeroCTAClick} />
      <MissionSection />
      
      <div id="gestante">
        <GestanteSection onCTAClick={handleGestanteCTAClick} />
      </div>

      <div id="criancas">
        <ChildrenSection onCTAClick={handleChildrenCTAClick} />
      </div>

      <div id="convites">
        <ConvitesSection onCTAClick={handleConvitesCTAClick} />
      </div>

      <div id="pets">
        <PetsSection onCTAClick={handlePetsCTAClick} />
      </div>

      <div id="moda">
        <FashionSection onCTAClick={handleFashionCTAClick} />
      </div>

      <HowItWorks />
      
      <div id="precos">
        <Pricing onSelectPlan={handleSelectPlan} />
      </div>

      <FinalCTA onPrimaryCTAClick={handleFinalPrimaryCTAClick} onSecondaryCTAClick={handleFinalSecondaryCTAClick} />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">IDM</div>
                <div className="logo-text">Studio IA</div>
              </div>
              <p className="footer-description">
                Democratizando o acesso a fotos profissionais.<br />
                Porque todo mundo merece ter seus momentos eternizados com qualidade.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Serviços</h4>
                <a href="#gestante" className="footer-link">Ensaio Gestante</a>
                <a href="#criancas" className="footer-link">Ensaio Infantil</a>
                <a href="#convites" className="footer-link">Convites Temáticos</a>
                <a href="#pets" className="footer-link">Ensaio de Pets</a>
                <a href="#moda" className="footer-link">Moda / Vitrine IA</a>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Empresa</h4>
                <a href="#" className="footer-link">Sobre nós</a>
                <a href="#" className="footer-link">Nosso propósito</a>
                <a href="#" className="footer-link">Contato</a>
                <a href="#" className="footer-link">Blog</a>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Suporte</h4>
                <a href="#" className="footer-link">Como funciona</a>
                <a href="#" className="footer-link">Perguntas frequentes</a>
                <a href="#" className="footer-link">Política de Privacidade</a>
                <a href="#" className="footer-link">Termos de Uso</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 IDM Studio IA. Todos os direitos reservados.<br />
              <span className="footer-heart">💜 Feito com amor para democratizar fotos profissionais</span>
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0B0B0B;
          color: #FFFFFF;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app {
          background: #0B0B0B;
          min-height: 100vh;
        }

        /* Navigation */
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(11, 11, 11, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: #9CA3AF;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #FFFFFF;
        }

        .nav-admin {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          color: #8B5CF6;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-admin:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .admin-icon {
          width: 16px;
          height: 16px;
        }

        /* Footer */
        .footer {
          background: #0F0F0F;
          border-top: 1px solid #1F1F1F;
          padding: 80px 24px 32px;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer-description {
          font-size: 15px;
          line-height: 1.7;
          color: #6B7280;
          margin: 0;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-title {
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-link {
          color: #9CA3AF;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #8B5CF6;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid #1F1F1F;
        }

        .footer-copyright {
          font-size: 14px;
          color: #6B7280;
          margin: 0;
          line-height: 1.6;
        }

        .footer-heart {
          color: #8B5CF6;
          font-size: 13px;
        }

        .footer-social {
          display: flex;
          gap: 24px;
        }

        .social-link {
          color: #9CA3AF;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .social-link:hover {
          color: #8B5CF6;
        }


        .nav-menu-toggle {
          display: none;
          border: 1px solid rgba(139, 92, 246, 0.45);
          background: rgba(139, 92, 246, 0.2);
          color: #FFFFFF;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
        }

        .mobile-menu-link {
          color: #E5E7EB;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 1024px) {
          .nav-links {
            gap: 16px;
          }

          .nav-link {
            font-size: 14px;
          }

          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 16px 20px;
          }

          .nav-links {
            display: none;
          }

          .nav-menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-menu {
            display: grid;
            gap: 10px;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 20px 14px;
          }

          .footer {
            padding: 60px 20px 24px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
