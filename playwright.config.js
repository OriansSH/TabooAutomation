const config = {
  fullyParallel: false,
  workers: 2,
  testDir: './__tests__',
  use: {
    headless: true,
    launchOptions: {
      slowMo: 700,
      args: ['--window-size=1920,1080'],
    },
    screenshot: 'on',
    video: {
      mode: 'on',
      size: { width: 1280, height: 720 }
    },
    viewport: { width: 1920, height: 1080 },
    browserName: 'chromium',
    channel: 'chrome',
  },
  projects: [
    {
      name: 'Taboo-project',
    },
  ],
  reporter: [
    ['html'],
    ['allure-playwright'],
  ],
};

export default config;
