import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions';
import * as utils from '../utils.js';
import { execSync } from 'child_process';
import { Purchase } from './PurchasePage.js';
import { GeneralPage } from '../GeneralPage.js';

test.describe('Purchase Tests', () => {
    let purchase;
    let generalPage

    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });

    test.use({ storageState: 'storage/loginState.json' });

    test.beforeEach(async ({ page }) => {

        await page.goto(utils.urlEnv);
        purchase = new Purchase(page);
        generalPage = new GeneralPage(page);

    });
    test('Taboo > Logged In Customer > Change Coins From Gold To Secret Coins', async ({ page }) => {
        await purchase.toggleGoldButton();
    });
    test('Taboo > Logged In Customer > Change Coins From Secret To Gold Coins', async ({ page }) => {
        await purchase.toggleGoldButton();
        await purchase.toggleSecretButton();
    });
    test('Taboo > Logged In Customer > Gold Coins >  Open Store widget and select Package', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
    });
    test('Taboo > Logged In Customer > Secret Coins >  Open Store widget and select Package', async ({ page }) => {
        await purchase.toggleGoldButton();
        await purchase.clickOnPurchaseSecretButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
    });
    test('Taboo > Logged In Customer > Checkout page > Add Coupon Code', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.fillCouponCode('Test');
        await purchase.clickOnCouponButton();
        await purchase.verifyOldPriceVisible();
    });
    test('Taboo > Logged In Customer > Checkout page > Purchase with Coupon Code', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.fillCouponCode('Test');
        await purchase.clickOnCouponButton();
        await purchase.verifyOldPriceVisible();
        await purchase.clickOnCheckoutPurchaseButton();
    });
    test('Taboo > Logged In Customer > Checkout page > Purchase without Coupon code', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
    });
    test('Taboo > Logged In Customer > Checkout page > coupon Field > Empty Field Validation', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCouponButton();
        await purchase.verifyGeneralErrorVisible();
    });
    test('Taboo > Logged In Customer > Customer Menu > Open Store Widget via Buy Icon', async ({ page }) => {
        await generalPage.openUserMenu();
        await purchase.clickOnBuyIcon();
        await purchase.verifyStoreWidget();
    });
});