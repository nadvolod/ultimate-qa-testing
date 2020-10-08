exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [],
    maxInstances: 100,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.ultimateqa.com/',
    waitforTimeout: 20000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,
    reporters: ['spec'],
    services: [],
};
