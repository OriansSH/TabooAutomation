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
    test('TEST > Taboo > Logged In Customer > Change Coins From Gold To Secret Coins', async ({ page }) => {
        await purchase.toggleGoldButton();
    });
    test('TEST > Taboo > Logged In Customer > Change Coins From Secret To Gold Coins', async ({ page }) => {
        await purchase.toggleGoldButton();
        await purchase.toggleSecretButton();
    });
    test('TEST > Taboo > Logged In Customer > Gold Coins >  Open Store widget and select Package', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.selectPackage();
    });
    test('TEST > Taboo > Logged In Customer > Secret Coins >  Open Store widget and select Package', async ({ page }) => {
        await purchase.toggleGoldButton();
        await purchase.clickOnPurchaseSecretButton();
        await purchase.selectPackage();
    });
});