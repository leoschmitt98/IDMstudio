describe('IDM Studio IA CTA buttons', () => {
  const baseUrl = 'https://id-mstudio.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
  });

  it('clica no CTA principal', () => {
    cy.contains('button, a', 'Transforme suas fotos agora').first().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  it('clica no CTA da seção Gestante', () => {
    cy.contains('button', 'Quero meu ensaio de gestante').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  it('clica no CTA da seção Crianças', () => {
    cy.contains('button', 'Quero edição em foto de criança').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  it('clica no CTA da seção Convites', () => {
    cy.contains('button', 'Quero um convite tematico').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  it('clica no CTA da seção Pets', () => {
    cy.contains('button', 'Quero edição em foto de pet').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  it('clica no CTA da seção Fashion', () => {
    cy.contains('button', 'Quero meu plano Fashion').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  context('planos de preços', () => {
    const plans = ['1 Foto', '3 Fotos', '10 Fotos', 'Fashion Mensal'];

    plans.forEach((plan) => {
      it(`seleciona o plano ${plan}`, () => {
        cy.contains('.pricing-card', plan)
          .scrollIntoView()
          .within(() => {
            cy.contains('button', 'Selecionar plano').click();
          });
        cy.get('@windowOpen').should('have.been.called');
      });
    });
  });

  it('clica no CTA final para WhatsApp', () => {
    cy.contains('button', 'Falar no WhatsApp').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });

  it('clica no CTA final para solicitar orçamento', () => {
    cy.contains('button', 'Solicitar orçamento').scrollIntoView().click();
    cy.get('@windowOpen').should('have.been.called');
  });
});