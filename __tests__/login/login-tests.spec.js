import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions.js';
import * as utils from '../utils.js';
import * as loginFunctions from './login-functions';



test.describe('Taboo > Login Widget Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        await generalFunctions.openLoginForm(page);
    });

    test('Taboo > Login > Valid Login Procces', async ({ page }) => {
        await loginFunctions.shadowRootLogin(page, utils.emailField, utils.testUserEmail);
        await loginFunctions.shadowRootLogin(page, utils.passwordField, utils.testUserPassword);
        const registerButton = await generalFunctions.clickLoginButton(page);
        await expect(registerButton).toBeHidden();
    });
});

test.describe('Taboo > Login Widget > Validations Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        await generalFunctions.openLoginForm(page);
    });

    test('Taboo > Login Widget > Empty Fields Validation', async ({ page }) => {
        const registerButton = await generalFunctions.clickLoginButton(page);
        await expect(registerButton).toBeVisible();
        await loginFunctions.loginValidationText(page);
    });
    test('Taboo > Login Widget > Wrong Credentials > General Error Validation', async ({ page }) => {
        await loginFunctions.shadowRootLogin(page, utils.emailField, 'or@gmail.com');
        await loginFunctions.shadowRootLogin(page, utils.passwordField, 'wrongpw');
        await generalFunctions.clickLoginButton(page);
        const generalError = await loginFunctions.loginGeneralError(page, utils.wrongCredentialsValidation);
        await expect(generalError).toHaveText(utils.wrongCredentialsValidation);
    });
});
