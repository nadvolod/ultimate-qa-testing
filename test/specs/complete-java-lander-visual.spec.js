describe('Selenium Java course landing page', () => {
    it('looks good responsive', () => {
        browser.url('/selenium-webdriver-java-course/');
        browser.execute('/*@visual.init*/', 'My Visual Test');
        browser.execute('/*@visual.snapshot*/', 'Login Page');
    });
});
