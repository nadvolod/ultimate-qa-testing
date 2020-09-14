exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 100,
    services: [],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://test-ultimateqa.wpmudev.host/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 20000,
    connectionRetryCount: 2,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
