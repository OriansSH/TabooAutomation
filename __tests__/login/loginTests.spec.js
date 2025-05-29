import { expect, test } from '@playwright/test';
import { LoginPage } from './LoginPage.js';
import { GeneralPage } from '../GeneralPage.js';
import * as utils from '../utils.js';

test.describe('Taboo > Login Widget Tests', () => {
    let loginPage;
    let generalPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        loginPage = new LoginPage(page);
        generalPage = new GeneralPage(page);
        await generalPage.openLoginForm();
    });

    test('Taboo > Login Widgets > Valid Login Process', async ({ page }) => {
        await loginPage.fillEmail(utils.testUserEmail);
        await loginPage.fillPassword(utils.testUserPassword);
        const loginButton = await loginPage.clickLoginButton();
        await expect(loginButton).toBeHidden();
    });
    test('Taboo > Login Widgets > Customer Login via Game Image', async ({ page }) => {
        await loginPage.loginXButton.click();
        await generalPage.clickOngameLobby('Play Majestic King');
        await loginPage.fillEmail(utils.testUserEmail);
        await loginPage.fillPassword(utils.testUserPassword);
        const loginButton = await loginPage.clickLoginButton();
        await expect(loginButton).toBeHidden();
    });
    test('Taboo > Login Widgets > Customer Login Via Sign In button in Register Widget', async ({ page }) => {
        await loginPage.loginXButton.click();
        await generalPage.openRegisterForm();
        await loginPage.clickSignInButtonInRegisterWidget();
        await loginPage.fillEmail(utils.testUserEmail);
        await loginPage.fillPassword(utils.testUserPassword);
        const loginButton = await loginPage.clickLoginButton();
        await expect(loginButton).toBeHidden();
    });
    test('Taboo > Logged in Customer > Logout Process', async ({ page }) => {
        await loginPage.login(utils.testUserEmail, utils.testUserPassword);
        await generalPage.openUserMenu();
        await generalPage.clickLogoutButton();
    });
});

test.describe('Taboo > Login Widget >  Validations Tests', () => {
    let loginPage;
    let generalPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        loginPage = new LoginPage(page);
        generalPage = new GeneralPage(page);
        await generalPage.openLoginForm();
    });
    test('Taboo > Login Widget > Empty Fields Validation', async ({ page }) => {
        await loginPage.clickLoginButton();
        await expect(loginPage.loginButton).toBeVisible();
        await loginPage.expectEmptyFieldsValidations();
    });
    test('Taboo > Login Widget > Wrong Credentials > Wrong Credentials Error Validation', async ({ page }) => {
        await loginPage.fillEmail(utils.testUserEmail);
        await loginPage.fillPassword(utils.wrongPassword);
        await loginPage.clickLoginButton();
        await loginPage.loginGeneralErrorMessage(utils.wrongCredentialsValidation);
    });
    test('Taboo > Login Widget > Password Field > Special Char Validation', async ({ page }) => {
        await loginPage.fillEmail(utils.testUserEmail);
        await loginPage.fillPassword(utils.specialPassword);
        await loginPage.clickLoginButton();
        await loginPage.expectGeneralError(utils.specialCharValidation);
    });
    test('Taboo > Login Widget > Password Field > At Least One number Validation', async ({ page }) => {
        await loginPage.fillEmail(utils.testUserEmail);
        await loginPage.fillPassword(utils.oneDigitPassword);
        await loginPage.clickLoginButton();
        await loginPage.expectGeneralError(utils.oneDigitValidation);
    });

});