export { }
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
declare global {
  namespace Cypress {
    interface Chainable {
      notInViewPort(param?: { prevSubject: boolean }): Chainable<void>
      isInViewPort(param?: { prevSubject: boolean }): Chainable<void>
    }
  }
}

Cypress.Cookies.debug(true, { verbose: true })

// the below two are needed as the navbar stays in the dom when scrolling down
Cypress.Commands.add('notInViewPort', { prevSubject: true }, subject => {
  const bounding = subject[0].getBoundingClientRect();

  expect(bounding.bottom <= 0).to.be.true;
  return subject;
})

Cypress.Commands.add('isInViewPort', { prevSubject: true }, subject => {
  const bounding = subject[0].getBoundingClientRect();
  expect(bounding.bottom >= 0).to.be.true;
  return subject;
})

