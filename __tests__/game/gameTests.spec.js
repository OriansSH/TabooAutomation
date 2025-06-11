import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import * as generalFunctions from '../general-functions.js';
import { LoginPage } from '../login/LoginPage.js';
import { GeneralPage } from "../GeneralPage.js";

// This is first Version of Game Test!!
test.describe('Launch Game Tests', () => {
    let loginPage;
    let generalPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        generalPage = new GeneralPage(page);
        await page.goto(utils.urlEnv);
    });
    test('Taboo > Lobby > Click on Game > Test Launch game > Majestic White Rhino ', async ({ page }) => {
        test.setTimeout(60000);
        await generalPage.openLoginForm(page);
        await loginPage.fillEmail('morad@gmail.com');
        await loginPage.fillPassword(utils.testUserPassword);
        await loginPage.clickLoginButton(page);
        const startGcBalance = await page.locator('.header--funds--coins span').nth(1).textContent();
        console.log('Majestic White Rhino GC Before:', startGcBalance);
        await generalPage.clickOnGameLobby(utils.gameMajesticKing)
        await page.waitForTimeout(12000);
        await page.locator('iframe[title="Majestic King"]').contentFrame().locator('canvas').click({
            position: {
                x: 830,
                y: 789
            },
        });
        await page.waitForTimeout(5000);
        await page.locator('iframe[title="Majestic King"]').contentFrame().locator('canvas').click({
            position: {
                x: 830,
                y: 781
            },
        });
        await page.waitForTimeout(5000)
        await generalPage.closeGameIframe(page);
        await page.waitForTimeout(1000)
        const endGcBalance = await page.locator('.header--funds--coins span').nth(1).textContent();
        console.log('Majestic White Rhino GC After', endGcBalance);
    });
    test('Taboo > Lobby > Click on Game > Test Launch game > Play Power of Merlin Megaways ', async ({ page }) => {
        test.setTimeout(60000);
        await generalFunctions.openLoginForm(page);
        await loginPage.fillEmail('morad@gmail.com');
        await loginPage.fillPassword(utils.testUserPassword);
        await loginPage.clickLoginButton(page);
        const startGcBalance = await page.locator('.header--funds--coins span').nth(1).textContent();
        console.log('Power of Merlin Megaways GC Before:', startGcBalance);
        await generalFunctions.clickOnGameLobby(page, 'Play Power of Merlin')
        await page.waitForTimeout(25000);
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
        await generalPage.closeGameIframe(page);
        await page.waitForTimeout(1000)
        const endGcBalance = await page.locator('.header--funds--coins span').nth(1).textContent();
        console.log('Power of Merlin Megaways GC After', endGcBalance);
    });
});