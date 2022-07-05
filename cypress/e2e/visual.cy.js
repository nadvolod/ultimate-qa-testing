/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
    // need to scroll to handle lazy loading
    cy.scrollTo('bottom', { duration: 5000 });
    cy.scrollTo('top', { duration: 2000 });
  });

  it("looks good", () => {
    // inspect the caught error that comes from RocketLazyLoadScripts
    cy.on('uncaught:exception', (e) => {
      return false;
      // on any other error message the test fails
    })
    cy.happoHideDynamicElements({selectors: ['#scroll']});
    cy.get("body").happoScreenshot();
  });
});