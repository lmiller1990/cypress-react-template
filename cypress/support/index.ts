/// <reference types="cypress" />

// Use TS to make sure support files written in TypeScript work correctly.
Cypress.Commands.add('clickButtonWithText', (text: string) => {
  return cy.get('button').contains(text).click();
});
