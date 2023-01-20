/// <reference types="cypress" />



describe('netflixroulette app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('displays six movies by default', () => {
    cy.get('.movie').should('have.length', 6)
    cy.get('.title-group .title').first().should('have.text', 'Kill Bill: Vol 2')
    cy.get('.title-group .title').last().should('have.text', 'Jackie Brown')
  })

  it('display searched movies', () => {
    cy.get('.search').type('Kill Bill')
    cy.get('.button').click() 
    cy.get('.movie').should('have.length', 2)
    cy.get('.title-group .title').first().should('have.text', 'Kill Bill: Vol 2')
    cy.get('.title-group .title').last().should('have.text', 'Kill Bill: Vol 1')
  })

  it('shows movie description', () => {
    cy.get('.movie').first().click()
    cy.get('.description-wrapper .title').should('have.text', 'Kill Bill: Vol 2')
    cy.get('.description-wrapper .year .red').should('have.text', '2004')
    cy.get('.description-wrapper .genre').should('have.text', 'Action & Adventure')
    cy.get('.description-wrapper .rating').should('have.text', '4.2')
    cy.get('.description-wrapper .length .red').should('have.text', '100')
    cy.get('.description-wrapper .description').should('have.text', 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.')
  })
  it('display rating ordered movies', () => {
    cy.get('label[for="RATING"]').click() 
    cy.get('.movie').should('have.length', 6)
    cy.get('.title-group .title').first().should('have.text', 'Jackie Brown')
    cy.get('.title-group .title').last().should('have.text', 'Reservoir Dogs')
  })
})
