import { test, expect } from '@playwright/test';
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
    // Removed those Tests for now becuase we remove the Coupon field from Checkout page    

    // test('Taboo > Logged In Customer > Checkout page > Add Coupon Code', async ({ page }) => {
    //     await purchase.clickOnPurchaseGoldButton();
    //     await purchase.verifyStoreWidget();
    //     await purchase.selectPackage();
    //     await purchase.fillCouponCode('Test');
    //     await purchase.clickOnCouponButton();
    //     await purchase.verifyOldPriceVisible();
    // });
    // test('Taboo > Logged In Customer > Checkout page > Purchase with Coupon Code', async ({ page }) => {
    //     await purchase.clickOnPurchaseGoldButton();
    //     await purchase.verifyStoreWidget();
    //     await purchase.selectPackage();
    //     await purchase.fillCouponCode('Test');
    //     await purchase.clickOnCouponButton();
    //     await purchase.verifyOldPriceVisible();
    //     await purchase.clickOnCheckoutPurchaseButton();
    // });
    // test('Taboo > Logged In Customer > Checkout page > Coupon Field > Empty Field Validation', async ({ page }) => {
    //     await purchase.clickOnPurchaseGoldButton();
    //     await purchase.verifyStoreWidget();
    //     await purchase.selectPackage();
    //     await purchase.clickOnCouponButton();
    //     await purchase.verifyGeneralErrorVisible();
    // });
    test('Taboo > Logged In Customer > Checkout page > Purchase without Coupon code', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.hardCodedFillPayments();
        await page.waitForTimeout(2000);
        await purchase.cardPayButtonLocator.click();
        await purchase.verifyConfirmationMessage();
    });
    test('Taboo > Logged In Customer > Checkout page > Secret Coins > Purchase Package', async ({ page }) => {
        await purchase.toggleGoldButton();
        await purchase.clickOnPurchaseSecretButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.hardCodedFillPayments();
        await page.waitForTimeout(2000);
        await purchase.cardPayButtonLocator.click();
        await purchase.verifyConfirmationMessage();
    });
    test('Taboo > Logged In Customer > Launch Game > Open Store > Purchase a pckage', async ({ page }) => {
        await generalPage.clickOnGameLobby(utils.gameMajesticKing)
        page.waitForTimeout(3000);
        await purchase.clickOnStoreInGame();
        await page.getByRole('button', { name: '$500', exact: true }).click();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.hardCodedFillPayments();
        await page.waitForTimeout(2000);
        await purchase.cardPayButtonLocator.click();
        await purchase.verifyConfirmationMessage();
    });
    test('Taboo > Logged In Customer > Customer Menu > Open Store Widget via Buy Icon', async ({ page }) => {
        await generalPage.openUserMenu();
        await purchase.clickOnBuyIcon();
        await purchase.verifyStoreWidget();
    });
});


test.describe('Purchase Tests Validations', () => {
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
    test('Taboo > Logged In Customer > Checkout page > Pay Modal > Empty Fields Validation', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.fillPaymentDetails();
        await purchase.cardPayButtonLocator.click();
        await purchase.verifyRequiredFieldErrors('Required');
    });
    test('Taboo > Logged In Customer > Checkout page > Pay Modal > Card Number > Invalid Number', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.fillPaymentDetails({
            cardNumber: '123',
        });
        await purchase.cardPayButtonLocator.click();
        await purchase.invalidCardNumberValidation('Card number is invalid');
    });
    test('Taboo > Logged In Customer > Checkout page > Pay Modal > Cvv Field > Invalid Number', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.fillPaymentDetails({
            cardNumber: '4111111111111111',
            expiryDate: '12/26',
            cvv: '1245',
            cardHolderName: 'Test User'
        });
        await purchase.cardPayButtonLocator.click();
        await purchase.invalidCvvNumberValidation('CVV for Visa must be 3 digits long');
    });
    test('Taboo > Logged In Customer > Checkout page > Pay Modal > Expiry Date Field > Invalid Date', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.fillPaymentDetails({
            expiryDate: '01/10',
        });
        await purchase.cardPayButtonLocator.click();
        await purchase.invalidExpiryDateValidation('Invalid expdate');
    });
    test('Taboo > Logged In Customer > Checkout page > Pay Modal > Expiry Date Field > Invalid Month', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.verifyStoreWidget();
        await purchase.selectPackage();
        await purchase.clickOnCheckoutPurchaseButton();
        await page.waitForTimeout(5000);
        await purchase.fillPaymentDetails({
            expiryDate: '55/12',
        });
        await purchase.cardPayButtonLocator.click();
        await purchase.invalidExpiryDateValidation('Invalid month');
    });
});