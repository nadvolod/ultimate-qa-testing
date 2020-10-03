describe('Complete Selenium Java landing page', () => {
    it('has correct url for the top button', () => {
        browser.url('/selenium-webdriver-java-course')
        const url = $('#testButton').getAttribute('href')
        expect(url).toBe('https://courses.ultimateqa.com/enroll/808620')
    });

    it('has correct url for floating button', () => {
        browser.url('/selenium-webdriver-java-course')
        const url = $('#floating-enroll-button').getAttribute('href')
        expect(url).toBe('https://courses.ultimateqa.com/enroll/808620')
    });
});


