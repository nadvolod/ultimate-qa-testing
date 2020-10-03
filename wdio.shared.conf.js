exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 100,
    services: [],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.ultimateqa.com/',
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
