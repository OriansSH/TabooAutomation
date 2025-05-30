# Test info

- Name: Contact Us Tests >> Taboo > Contact us > Empty Message Validation
- Location: /home/runner/work/TabooAutomation/TabooAutomation/__tests__/contact-us/contact-usTests.spec.js:30:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /opt/google/chrome/chrome --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AutoExpandDetailsElement,AvoidUnnecessaryBeforeUnloadCheckSync,CertificateTransparencyComponentUpdater,DeferRendererTasksAfterInput,DestroyProfileOnBrowserClose,DialMediaRouteProvider,ExtensionManifestV2Disabled,GlobalMediaControls,HttpsUpgrades,ImprovedCookieControls,LazyFrameLoading,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --enable-automation --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --no-sandbox --window-size=1920,1080 --user-data-dir=/tmp/playwright_chromiumdev_profile-oAwJVb --remote-debugging-pipe --no-startup-window
  - <launched> pid=6678
  - [pid=6678][err] [0530/072110.064915:WARNING:chrome/app/chrome_main_linux.cc:80] Read channel stable from /opt/google/chrome/CHROME_VERSION_EXTRA
  - [pid=6678][err] [6678:6678:0530/072110.137955:ERROR:ui/ozone/platform/x11/ozone_platform_x11.cc:249] Missing X server or $DISPLAY
  - [pid=6678][err] [6678:6678:0530/072110.137974:ERROR:ui/aura/env.cc:257] The platform failed to initialize.  Exiting.

```

# Test source

```ts
   1 | import { expect, test } from "@playwright/test";
   2 | import * as utils from '../utils.js';
   3 | import { execSync } from 'child_process';
   4 | import { ContactUsPage } from "./contactUsPage.js";
   5 | import { GeneralPage } from "../GeneralPage.js";
   6 |
   7 | test.describe('Contact Us Tests', () => {
   8 |     let contactus;
   9 |     let generalPage;
  10 |     test.beforeAll(() => {
  11 |         execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
  12 |     });
  13 |
  14 |     test.use({ storageState: 'storage/loginState.json' });
  15 |
  16 |     test.beforeEach(async ({ page }) => {
  17 |         await page.goto(utils.urlEnv);
  18 |         contactus = new ContactUsPage(page);
  19 |         generalPage = new GeneralPage(page);
  20 |     });
  21 |     test('Taboo > Contact us > Send message to support', async ({ page }) => {
  22 |         await generalPage.openUserMenu();
  23 |         await contactus.clickOnContactUsButton();
  24 |         await contactus.fillContactUsField('Automation Test message');
  25 |         const submitButton = await contactus.clickOnSubmitButton();
  26 |         await expect(submitButton).toBeVisible();
  27 |         await submitButton.click();
  28 |         await expect(submitButton).toBeVisible();
  29 |     });
> 30 |     test('Taboo > Contact us > Empty Message Validation', async ({ page }) => {
     |     ^ Error: browserType.launch: Target page, context or browser has been closed
  31 |         await generalPage.openUserMenu();
  32 |         await contactus.clickOnContactUsButton();
  33 |         const submitButton = await contactus.clickOnSubmitButton();
  34 |         await submitButton.click();
  35 |         await contactus.contactUsValidation(utils.contactUsEmptyValidation);
  36 |     });
  37 |     test('Taboo > Contact us > Click on X Button to close the Form', async ({ page }) => {
  38 |         await generalPage.openUserMenu();
  39 |         await contactus.clickOnContactUsButton();
  40 |         await contactus.clickOnXButton(page);
  41 |         await contactus.contactUsHidden(page, expect);
  42 |     });
  43 |     test('Taboo > Contact us > My Profile Widget >  Send message to support via My Profile Widget', async ({ page }) => {
  44 |         await generalPage.openUserMenu();
  45 |         await contactus.clickOnMyProfileButton();
  46 |         await contactus.clickOnSupportViaProfile();
  47 |         await contactus.fillContactUsField('Automation Test message Via My Profile Widget');
  48 |         const submitButton = await contactus.clickOnSubmitButton();
  49 |         await expect(submitButton).toBeVisible();
  50 |         await submitButton.click();
  51 |         await expect(submitButton).toBeHidden();
  52 |     });
  53 |
  54 | });
```