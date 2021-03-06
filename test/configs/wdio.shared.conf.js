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
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 120000
    },
}
