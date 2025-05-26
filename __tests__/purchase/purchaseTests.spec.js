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
    test('TEST > Taboo > Logged In Customer > Click on Purchase Button TEST', async ({ page }) => {
        await purchase.clickOnPurchaseGoldButton();
        await purchase.clickOnXButton()
        await purchase.toggleGoldButton();
        await purchase.clickOnPurchaseSecretButton();
        await purchase.selectPackage();

    });
});