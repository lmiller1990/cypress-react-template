import React from 'react';
import { mount } from '@cypress/react';

xit('uses a custom command written in TypeScript', () => {
  const Comp: React.FC = () => {
    const onClick = cy.stub()
    return (
      <button onClick={onClick}>Button!</button>
    );
  }

  mount(<Comp />);

  cy.clickButtonWithText('Button!');
})
