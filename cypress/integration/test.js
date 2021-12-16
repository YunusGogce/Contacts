describe('CRUD contact', () => {
  it('create contact', () => {
    cy.visit('/contacten/toevoegen');
    cy.get('input[name="name"]').type('Test contact');
    cy.get('select').select('Werk');
    cy.get('.btn-add').click();
  });

  it('read contact', () => {
    cy.get('.contacts-list').contains('Test contact');
  });

  it('update contact', () => {
    cy.get('.contacts-list')
      .contains('Test contact')
      .parent()
      .parent()
      .children('.hidden')
      .children('.btn-group-action')
      .children('a')
      .click();
    cy.url().should('include', '/contacten/wijzigen');
    cy.get('input[name="email"]').type('testcontact@gmail.com');
    cy.get('form').submit();
    cy.get('.contacts-list').contains('testcontact@gmail.com');
  });

  it('delete contact', () => {
    cy.get('.contacts-list')
      .contains('Test contact')
      .parent()
      .parent()
      .children('.hidden')
      .children('.btn-group-action')
      .children('button')
      .click();
    cy.get('.btn-confirm').click();
  });
});
