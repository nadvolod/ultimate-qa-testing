describe('Visual testing of landing pages', () => {
    it('looks good responsive', () => {
        browser.url('/?utm_source=automated-testing');
        browser.execute('/*@visual.init*/', 'Responsive Test');
        browser.execute('/*@visual.snapshot*/', 'Home Page');

        browser.url('/selenium-java-sale/?utm_source=automated-testing');
        browser.execute('window.scrollTo(0,document.body.scrollHeight)');
        browser.execute('/*@visual.snapshot*/', 'Sales Page', {scrollAndStitchScreenshot: true});

        browser.url('/selenium-webdriver-java-course/?utm_source=automated-testing');
        browser.execute('window.scrollTo(0,document.body.scrollHeight)');
        browser.execute('/*@visual.snapshot*/', 'Selenium Java Landing Page', {scrollAndStitchScreenshot: true});

        browser.url('/selenium-java-2/?utm_source=automated-testing');
        browser.execute('window.scrollTo(0,document.body.scrollHeight)');
        browser.execute('/*@visual.snapshot*/', 'Selenium Java Landing Page v2', {scrollAndStitchScreenshot: true});
        browser.execute('/*@visual.end*/');
    });
});
