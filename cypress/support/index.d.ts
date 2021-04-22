/// <reference types="cypress" />

declare namespace Cypress {
  export interface Chainable {
    clickButtonWithText(text: string): Chainable;
  }
}
