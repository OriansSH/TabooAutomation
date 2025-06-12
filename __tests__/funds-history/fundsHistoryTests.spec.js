import { expect, test } from "@playwright/test";
import { execSync } from 'child_process';
import * as utils from '../utils.js';
import { GeneralPage } from "../GeneralPage.js";
import { FundsPage } from "./fundsPage.js";

test.describe('Funds History Tests', () => {
    let generalPage;
    let fundsPage;

    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });

    test.use({ storageState: 'storage/loginState.json' });

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        generalPage = new GeneralPage(page);
        fundsPage = new FundsPage(page);
    });
    test('Taboo > Funds History Widget > Click and Open Widget', async ({ page }) => {
        await generalPage.openUserMenu();
        await fundsPage.clickOnFundsHistoryWidget();
    })
    test('Taboo > Funds History Widget > Open and Verify History', async ({ page }) => {
        await generalPage.openUserMenu();
        await fundsPage.clickOnFundsHistoryWidget();
        await fundsPage.verifyRegistrationReward();
    })
    test('Taboo > Funds History Widget > Close Funds History Widget', async ({ page }) => {
        await generalPage.openUserMenu();
        await fundsPage.clickOnFundsHistoryWidget();
        await fundsPage.closeFundsHistoryWidget();
    })
});