describe('Getgit', function() {

    it('should load', function() {
      cy.visit('http://localhost:4200');
      cy.get('app-root h2').contains('Git users. Reloaded');
    })
    
  });