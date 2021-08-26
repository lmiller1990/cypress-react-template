import { mount } from '@cypress/react'

it('works with a fragment', () => {
  mount(
    <div>
      <>It is a fragment without importing React.</>
    </div>
  )
  cy.get('div').contains('It is a fragment without importing React')

  // should fail
  expect(1).to.eq(2)
})
