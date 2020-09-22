describe('My Bootcamp landing page', () => {
    it('should have both of the AB testing options', () => {
        browser.url('/complete-selenium-webdriver-with-java-bootcamp-landing-page-ab-pricing-tables/')
        expect($('#testButton')).toBeExisting();
    });
    it('should have correct url for the top button', () => {
        browser.url('/selenium-webdriver-java-course')
        const url = $('#testButton').getAttribute('href')
        expect(url).toBe('https://courses.ultimateqa.com/enroll/808620?et=free_trial')
    });
});


