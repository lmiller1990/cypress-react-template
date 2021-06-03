import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});


it('renders app and fetch elemnet using react-selector', () => {
  mount(<App />);

// cypress-react-selector helps identifying elements using native react pro[erties - component, props and states
// find more here - https://github.com/abhinaba-ghosh/cypress-react-selector
  cy.waitForReact();
  cy.react('App').should('be.visible');
});
