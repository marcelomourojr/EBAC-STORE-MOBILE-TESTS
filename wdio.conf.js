export const config = {
    //runner: 'local',
    //port: 4723,


    user: 'oauth-marceloaugustomouro-eb6d3',
    key: 'a8e4bfbf-3065-49a9-a483-4ba2a39bdb6f',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
 

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
    //    {
    //        platformName: 'Android',
    //        'appium:deviceName': 'ebaq-qe',
    //        'appium:platformVersion': '14.0',
    //        'appium:automationName': 'UiAutomator2',
    //        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
    //       'appium:appWaitActivity': '.MainActivity',
    //        'appium:disableIdLocatorAutocomplete': true,
    //
    //    }
        {
            platformName: 'Android',
            "browserName": "Safari",
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            "appium:disableIdLocatorAutocompletion": true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.5.1'
            },
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
