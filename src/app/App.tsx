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


export default function App() {
  const whatsappNumber = getWhatsAppNumber(import.meta.env.VITE_WHATSAPP_NUMBER);

  const handleCTAClick = () => {
    window.open(
      buildWhatsappMessageUrl(
        whatsappNumber,
        'Olá! Gostaria de saber mais sobre os serviços do IDM Studio IA.'
      ),
      '_blank'
    );
  };

  const handleSelectPlan = (plan: string) => {
    window.open(
      buildWhatsappMessageUrl(
        whatsappNumber,
        `Olá! Tenho interesse no plano ${plan}.`
      ),
      '_blank'
    );
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
            <a href="#gestante" className="nav-link">Gestante</a>
            <a href="#criancas" className="nav-link">Crianças</a>
            <a href="#convites" className="nav-link">Convites</a>
            <a href="#pets" className="nav-link">Pets</a>
            <a href="#moda" className="nav-link">Moda</a>
            <a href="#precos" className="nav-link">Preços</a>
          </div>
        </div>
      </nav>

      {/* Landing Page Sections */}
      <HeroSection onCTAClick={handleCTAClick} />
      <MissionSection />
      
      <div id="gestante">
        <GestanteSection onCTAClick={handleCTAClick} />
      </div>

      <div id="criancas">
        <ChildrenSection onCTAClick={handleCTAClick} />
      </div>

      <div id="convites">
        <ConvitesSection onCTAClick={handleCTAClick} />
      </div>

      <div id="pets">
        <PetsSection onCTAClick={handleCTAClick} />
      </div>

      <div id="moda">
        <FashionSection onCTAClick={handleCTAClick} />
      </div>

      <HowItWorks />
      
      <div id="precos">
        <Pricing onSelectPlan={handleSelectPlan} />
      </div>

      <FinalCTA onCTAClick={handleCTAClick} />

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
