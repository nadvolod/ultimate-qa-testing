describe('Performance Tests', () => {
    it('(sauce:performance) custom command should assert pageload and speedIndex has not regressed', () => {
        browser.url('/');
        const output = browser.execute('sauce:performance', {
            name: 'WebdriverIO Performance Example',
            metrics: ['speedIndex', 'load'],
        })
        const { result, details } = output
        return assert.equal(
            result, 'pass',
            `Regression detected for metrics ${JSON.stringify(details, null, 4)}`,
        )
    })
});


