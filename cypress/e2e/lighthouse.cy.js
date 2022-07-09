/// <reference types="cypress" />

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has maintained lighthouse metrics', () => {
        cy.lighthouse({
            accessibility: 74,
            'best-practices': 92,
            seo: 84,
            pwa: 40,
            performance: 79,
        })
    })
})