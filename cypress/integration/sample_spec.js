describe('Getgit', function() {

    it('should load', function() {
      cy.visit('http://localhost:4200');
      cy.get('app-root h1').contains('Git users. Reloaded');
    })
    
  });