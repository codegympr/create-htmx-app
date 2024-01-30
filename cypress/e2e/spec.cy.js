describe('Create HTMX App - Test Suite', () => {
  it('Successfully loads the home page', () => {
    cy.visit('http://localhost:3000')
  })
  it('Successfully loads the about page', () => {
    cy.visit('http://localhost:3000/about')
  })
  it('Successfully loads the contact page', () => {
    cy.visit('http://localhost:3000/contact')
  })
  it('Successfully loads the refresh page', () => {
    cy.visit('http://localhost:3000/refresh')
  })
})
