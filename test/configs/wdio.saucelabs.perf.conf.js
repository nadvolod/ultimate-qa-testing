const {config} = require('./wdio.shared.conf');

const sauceOptions = {
    'sauce:options': {
        extendedDebugging: true,
        capturePerformance: true,
        build: 'Ultimate QA Performance Tests'
    },
}

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.waitforTimeout = 120000,
config.connectionRetryTimeout = 120000,
config.connectionRetryCount = 1,
config.specs = [
    './test/specs/**/*perf.spec.js'
],

config.capabilities = [
    {
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        ...sauceOptions
    },
];

config.services = config.services.concat('sauce');

exports.config = config;
