import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import * as generalFunctions from '../general-functions.js';
import { LoginPage } from '../login/LoginPage.js';

// This is first Version of Game Test!!
test.describe('Lunch Game Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(utils.urlEnv);
    });
    test('Taboo > Lobby > Click on Game > Test lunch game > Majestic White Rhino ', async ({ page }) => {
        await generalFunctions.openLoginForm(page);
        await loginPage.fillEmail('morad@gmail.com');
        await loginPage.fillPassword(utils.testUserPassword);
        await generalFunctions.clickLoginButton(page);
        generalFunctions.clickOnGameLobby(page, 'Play Majestic White Rhino')
        await page.waitForTimeout(7000);
        await page.locator('iframe[title="Majestic White Rhino"]').contentFrame().locator('canvas').click({
            position: {
                x: 830,
                y: 781
            },
        });
        await page.waitForTimeout(2000);
        await page.locator('iframe[title="Majestic White Rhino"]').contentFrame().locator('canvas').click({
            position: {
                x: 830,
                y: 781
            },
        });
        await page.waitForTimeout(5000)

    });
    test('Taboo > Lobby > Click on Game > Test lunch game > Play Power of Merlin Megaways ', async ({ page }) => {
        await generalFunctions.openLoginForm(page);
        await loginPage.fillEmail('morad@gmail.com');
        await loginPage.fillPassword(utils.testUserPassword);
        await generalFunctions.clickLoginButton(page);
        generalFunctions.clickOnGameLobby(page, 'Play Power of Merlin Megaways')
        await page.waitForTimeout(7000);
        await page.locator('iframe[title="Power of Merlin Megaways"]').contentFrame().locator('canvas').click({
            position: {
                x: 1362,
                y: 629
            }
        });
        await page.locator('iframe[title="Power of Merlin Megaways"]').contentFrame().locator('canvas').click({
            position: {
                x: 1246,
                y: 769
            }
        });
        await page.waitForTimeout(5000)

    });
});