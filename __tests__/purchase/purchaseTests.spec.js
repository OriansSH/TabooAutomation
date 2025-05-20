import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions';
import * as utils from '../utils.js';
import { execSync } from 'child_process';
import { Purchase } from './PurchasePage.js';

test.describe('Purchase Tests', () => {
    let purchase;

    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });

    test.use({ storageState: 'storage/loginState.json' });

    test.beforeEach(async ({ page }) => {

        await page.goto(utils.urlEnv);
        purchase = new Purchase(page);
    });
    // Future Test for Purchase process
    test('Taboo > LoggedIn Customer > Click on Purchase Button', async ({ page }) => {
        const purchaseGoldButton = page.locator(utils.purchaseGoldButton);
        await purchaseGoldButton.click();
        await generalFunctions.clickOnXButton(page);
        const toggleGoldButton = page.locator(utils.toggleGoldButton);
        await toggleGoldButton.click();
        const purchaseSecretButton = page.locator(utils.purchaseSecretButton);
        await purchaseSecretButton.click();
    });

    test('TEST > Taboo > Logged In Customer > Click on Purchase Button TEST', async ({ page }) => {
        // await page.pause();
        await purchase.clickOnPurchaseGoldButton();
        await purchase.clickOnXButton()
        await purchase.toggleGoldButton();
        await purchase.clickOnPurchaseSecretButton();
        await purchase.selectPackage();

    });
});