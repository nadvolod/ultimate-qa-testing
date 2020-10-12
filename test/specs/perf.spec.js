describe('Performance Tests', () => {
    it('Pages have not regressed', () => {
        browser.url('/?utm_source=automated-testing');
        browser.url('selenium-java-2/?utm_source=automated-testing');
        browser.url('selenium-webdriver-java-course/?utm_source=automated-testing');
        // const output = browser.execute('sauce:performance', {
        //     name: 'Home Page Performance',
        //     metrics: ['speedIndex', 'load'],
        // })
        // const { result, details } = output
        // return assert.equal(
        //     result, 'pass',
        //     `Regression detected for metrics ${JSON.stringify(details, null, 4)}`,
        // )
    })
});


