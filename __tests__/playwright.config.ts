// eslint.config.js
// @ts-check

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
    fullyParallel: false,
    workers: 1,
    testDir: '/home/orians/taboo/__tests__',
    projects: [
        {
            name: 'chromium-project',
            use:
            {
               browserName: 'chromium'
                , channel: 'chrome'
            },
        },
    ],
    reporter: [
        ["html"],
        ["allure-playwright"]
    ],
    use: {
        launchOptions: {
            slowMo: 700, 
            args: ["--start-maximized"]
        },
        headless: false, 
        screenshot: 'on',
        video: 'on', 
        viewport: null 
    },
};
export default config;
