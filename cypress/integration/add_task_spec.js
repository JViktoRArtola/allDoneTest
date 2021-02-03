// Even without adding an assertion, we know that everything is okay! This is because many of Cypress’ commands are built to fail if they don’t find what they’re expecting to find. This is known as a Default Assertion.
describe('Add a new Task', () => {
  it('successfully fill the input', () => {
    cy.visit('/');
    cy.contains('Type to add').click();
    cy.get('.css-textinput-11aywtz')
      .type('Running E2E test #run @victor docs.cypress.io fake@email.com')
      .should(
        'have.value',
        'Running E2E test #run @victor docs.cypress.io fake@email.com',
      );
    cy.wait(3000);
    cy.get('.r-backgroundColor-t6fudj').click();
    cy.get('.r-backgroundColor-1uxh0fu').click();
  });
});
