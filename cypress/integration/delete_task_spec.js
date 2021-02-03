// Even without adding an assertion, we know that everything is okay! This is because many of Cypress’ commands are built to fail if they don’t find what they’re expecting to find. This is known as a Default Assertion.
describe('Delete a Task', () => {
  it('successfully deletes', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.contains('Open AllDone').click();
    cy.wait(2000);
    cy.contains('❌').click();
    cy.wait(2000);
    cy.contains('Proceed').click();
  });
});
