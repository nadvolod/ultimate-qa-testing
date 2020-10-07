const {config} = require('./wdio.conf');

config.region = process.env.REGION || 'us';

config.capabilities = [
    {
        browserName: 'chrome',
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
        'sauce:options': {
            username: process.env.SAUCE_USERNAME,
            accesskey: process.env.SAUCE_ACCESS_KEY
        },
        'sauce:visual': {
            apiKey: process.env.SCREENER_API_KEY,
            projectName: 'ultimate-qa-testing',
            viewportSize: '1280x1024'
        }
    }
];

exports.config = config;
