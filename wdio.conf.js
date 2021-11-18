exports.config = {
    specs: [
        './specs/**/*.spec.js'
    ],
    exclude: [
        './specs/example.spec.js'
    ],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://demowebshop.tricentis.com',

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
