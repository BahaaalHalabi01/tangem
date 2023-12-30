describe('show and hide card', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("doesn't show lower banner on open", () => {
    cy.get('[data-cy="top"]').isInViewPort()
    cy.get('[data-cy="ad-card"]').should('not.be.visible')
  })
  it('shows banner on scroll down', () => {
    cy.scrollTo('top')
    cy.get('[data-cy="top"]').isInViewPort()
    cy.get('[data-cy="ad-card"]').should('not.be.visible')
    cy.scrollTo(0, 2000)
    //wait for transition
    cy.wait(2000)
    cy.get('[data-cy="top"]').notInViewPort()
    cy.get('[data-cy="ad-card"]').should('be.visible')
  })
  it('hides banner on scroll up', () => {
    cy.scrollTo(0, 2000)
    cy.get('[data-cy="top"]').notInViewPort()
    cy.get('[data-cy="ad-card"]').should('be.visible')
    cy.get('[data-cy="top"]').scrollIntoView()
    //wait for transition
    cy.wait(2000)
    cy.get('[data-cy="ad-card"]').should('not.be.visible')
    cy.get('[data-cy="top"]').isInViewPort()
  })
})
