
describe('show and hide card', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("doesn't show lower banner on open", () => {
    cy.scrollTo(0,0)
    cy.get('[data-cy="top"]').isInViewPort()
    //other way of checking if it isn't visible
    cy.get('[data-cy="ad-card"]').invoke('attr','data-state').should('be.eq','false')
  })
  it('shows banner on scroll down', () => {
    cy.get('[data-cy="top"]').isInViewPort()
    cy.get('[data-cy="ad-card"]').isInViewPort()
    cy.scrollTo(0, 400)
    cy.get('[data-cy="top"]').notInViewPort()
    cy.get('[data-cy="ad-card"]').isInViewPort()
  })
  it('hides banner on scroll up', () => {
    cy.scrollTo(0, 400)
    cy.get('[data-cy="top"]').notInViewPort()
    cy.get('[data-cy="ad-card"]').scrollIntoView().isInViewPort()
    cy.get('[data-cy="top"]').scrollIntoView()
    cy.get('[data-cy="ad-card"]').isInViewPort()
    cy.get('[data-cy="top"]').isInViewPort()
  })
})

describe('hide on click x and not open anymore', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should hide the card', () => {
    cy.scrollTo(0, 400),
      cy.get('[data-cy="ad-card"]').scrollIntoView().isInViewPort()
    cy.intercept('POST', '/').as(
      'close'
    )
    cy.get('form').submit()
    cy.wait(['@close'])
    cy.get('[data-cy="ad-card"]').isInViewPort()
    cy.getCookie('advertisment').should('have.property', 'name', 'advertisment')
    cy.getCookie('advertisment').should('have.property', 'value', 'hide')
  })
  it('card should not show anymore when scrolling down', () => {
    cy.scrollTo(0, 400),
      cy.get('[data-cy="ad-card"]').should('not.be.visible')
  })
  it('should not show after refershing', () => {
    cy.scrollTo(0, 400)
    cy.get('[data-cy="ad-card"]').should('not.be.visible')

  })

})
