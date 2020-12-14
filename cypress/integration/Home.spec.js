describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it("header contains GMDB, Home, and Login links", () => {
      cy.get("header").should("contain", "GMDB");
      cy.get('header').should('contain', 'Home')
      cy.get('header').should('contain', 'Login')
    });
    
    it("should contain a list of movies", () => {
        cy.get(".movieList").toExist();
    })
})