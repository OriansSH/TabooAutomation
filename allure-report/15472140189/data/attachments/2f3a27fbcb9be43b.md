# Test info

- Name: Purchase Tests >> Taboo > Logged In Customer > Gold Coins >  Open Store widget and select Package
- Location: /home/runner/work/TabooAutomation/TabooAutomation/__tests__/purchase/purchaseTests.spec.js:32:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://dev-cms.plaee.dev/", waiting until "load"

    at /home/runner/work/TabooAutomation/TabooAutomation/__tests__/purchase/purchaseTests.spec.js:20:20
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import * as generalFunctions from '../general-functions';
   3 | import * as utils from '../utils.js';
   4 | import { execSync } from 'child_process';
   5 | import { Purchase } from './PurchasePage.js';
   6 | import { GeneralPage } from '../GeneralPage.js';
   7 |
   8 | test.describe('Purchase Tests', () => {
   9 |     let purchase;
  10 |     let generalPage
  11 |
  12 |     test.beforeAll(() => {
  13 |         execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
  14 |     });
  15 |
  16 |     test.use({ storageState: 'storage/loginState.json' });
  17 |
  18 |     test.beforeEach(async ({ page }) => {
  19 |
> 20 |         await page.goto(utils.urlEnv);
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  21 |         purchase = new Purchase(page);
  22 |         generalPage = new GeneralPage(page);
  23 |
  24 |     });
  25 |     test('Taboo > Logged In Customer > Change Coins From Gold To Secret Coins', async ({ page }) => {
  26 |         await purchase.toggleGoldButton();
  27 |     });
  28 |     test('Taboo > Logged In Customer > Change Coins From Secret To Gold Coins', async ({ page }) => {
  29 |         await purchase.toggleGoldButton();
  30 |         await purchase.toggleSecretButton();
  31 |     });
  32 |     test('Taboo > Logged In Customer > Gold Coins >  Open Store widget and select Package', async ({ page }) => {
  33 |         await purchase.clickOnPurchaseGoldButton();
  34 |         await purchase.verifyStoreWidget();
  35 |         await purchase.selectPackage();
  36 |     });
  37 |     test('Taboo > Logged In Customer > Secret Coins >  Open Store widget and select Package', async ({ page }) => {
  38 |         await purchase.toggleGoldButton();
  39 |         await purchase.clickOnPurchaseSecretButton();
  40 |         await purchase.verifyStoreWidget();
  41 |         await purchase.selectPackage();
  42 |     });
  43 |     test('Taboo > Logged In Customer > Checkout page > Add Coupon Code', async ({ page }) => {
  44 |         await purchase.clickOnPurchaseGoldButton();
  45 |         await purchase.verifyStoreWidget();
  46 |         await purchase.selectPackage();
  47 |         await purchase.fillCouponCode('Test');
  48 |         await purchase.clickOnCouponButton();
  49 |         await purchase.verifyOldPriceVisible();
  50 |     });
  51 |     test('Taboo > Logged In Customer > Checkout page > Purchase with Coupon Code', async ({ page }) => {
  52 |         await purchase.clickOnPurchaseGoldButton();
  53 |         await purchase.verifyStoreWidget();
  54 |         await purchase.selectPackage();
  55 |         await purchase.fillCouponCode('Test');
  56 |         await purchase.clickOnCouponButton();
  57 |         await purchase.verifyOldPriceVisible();
  58 |         await purchase.clickOnCheckoutPurchaseButton();
  59 |     });
  60 |     test('Taboo > Logged In Customer > Checkout page > Purchase without Coupon code', async ({ page }) => {
  61 |         await purchase.clickOnPurchaseGoldButton();
  62 |         await purchase.verifyStoreWidget();
  63 |         await purchase.selectPackage();
  64 |         await purchase.clickOnCheckoutPurchaseButton();
  65 |     });
  66 |     test('Taboo > Logged In Customer > Checkout page > coupon Field > Empty Field Validation', async ({ page }) => {
  67 |         await purchase.clickOnPurchaseGoldButton();
  68 |         await purchase.verifyStoreWidget();
  69 |         await purchase.selectPackage();
  70 |         await purchase.clickOnCouponButton();
  71 |         await purchase.verifyGeneralErrorVisible();
  72 |     });
  73 |     test('Taboo > Logged In Customer > Customer Menu > Open Store Widget via Buy Icon', async ({ page }) => {
  74 |         await generalPage.openUserMenu();
  75 |         await purchase.clickOnBuyIcon();
  76 |         await purchase.verifyStoreWidget();
  77 |     });
  78 | });
```