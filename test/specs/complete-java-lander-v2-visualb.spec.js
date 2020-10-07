describe('Selenium Java course landing page', () => {
    it('looks good responsive', () => {
        browser.url('/selenium-java-2/');
        browser.execute('/*@visual.init*/', 'Selenium Java v2');
        browser.execute('/*@visual.snapshot*/', 'Landing Page');
    });
});
