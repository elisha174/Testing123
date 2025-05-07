describe('React Tech Quiz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the button text on the screen', () => {
    cy.visit('http://localhost:3000/')
    cy.get("button").contains('Start Quiz').click();
  });

  it('should display text on the screen', () => {
    cy.get("button").contains('Start Quiz').click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("4").click();
    cy.get('h2').contains('Quiz Completed')
  });
});