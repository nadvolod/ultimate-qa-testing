describe('My Bootcamp landing page', () => {
    it('should have both of the AB testing options', () => {
        browser.url('/complete-selenium-webdriver-with-java-bootcamp-landing-page-ab-pricing-tables/')
        expect($('#testButton')).toBeExisting();
    });
});


