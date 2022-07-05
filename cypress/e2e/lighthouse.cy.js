/// <reference types="cypress" />

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has maintained lighthouse metrics', () => {
        cy.lighthouse({
            accessibility: 90,
            'best-practices': 92,
            seo: 90,
            pwa: 60,
            performance: 90,
        })
    })
})