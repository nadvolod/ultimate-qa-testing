describe('Visual testing of landing pages', () => {
    it('looks good responsive', () => {
        browser.url('/');
        browser.execute('/*@visual.init*/', 'Responsive Test');
        browser.execute('/*@visual.snapshot*/', 'Home Page');

        browser.url('/selenium-java-sale/');
        browser.execute('/*@visual.snapshot*/', 'Sales Page');

        browser.url('/selenium-webdriver-java-course/');
        browser.execute('/*@visual.snapshot*/', 'Selenium Java Landing Page');

        browser.url('/selenium-java-2/');
        browser.execute('/*@visual.snapshot*/', 'Selenium Java Landing Page v2');
        browser.execute('/*@visual.end*/');
    });
});
