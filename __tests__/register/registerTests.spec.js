import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import { RegisterPage } from './RegisterPage.js';
import { GeneralPage } from '../GeneralPage.js';
import { LoginPage } from "../login/LoginPage.js";

test.describe('Taboo > Register Widget Tests', () => {
    let registerPage;
    let generalPage;
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        registerPage = new RegisterPage(page);
        generalPage = new GeneralPage(page);
        await generalPage.openRegisterForm();
    });
    // Test will Failed Untill Bug will Fixed
    test('Taboo > Valida Register Process', async ({ page }) => {
        await registerPage.hardCodedRegister(page);
        const createAccountButton = await registerPage.clickCreateAccountButton();
        await expect(createAccountButton).toBeHidden();
        await registerPage.verifyConsentHeadlineVisible();
        await registerPage.verifyAcceptButtonState(false);
        await registerPage.clickConsentCheckboxes();
        await registerPage.verifyAcceptButtonState(true);
    });
});

test.describe('Taboo > Register Widget > Validations Tests', () => {
    let registerPage;
    let generalPage;
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        registerPage = new RegisterPage(page);
        generalPage = new GeneralPage(page);
        await generalPage.openRegisterForm();
    });
    test('Empty Fields Validation', async () => {
        const button = await registerPage.clickCreateAccountButton();
        await expect(button).toBeVisible();
        await registerPage.expectEmptyFieldValidationMessages();
    });

    test('Password Field - Missing Special Character Validation', async () => {
        await registerPage.hardCodedRegister();
        await registerPage.fillPassword(utils.specialPassword);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.specialCharValidation);
    });

    test('Password Field - Missing Number Validation', async () => {
        await registerPage.hardCodedRegister();
        await registerPage.fillPassword(utils.oneDigitPassword);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.oneDigitValidation);
    });
    test('Password Field - UnMatched Password Validation', async () => {
        await registerPage.hardCodedRegister();
        await registerPage.fillConfirmPassword(utils.unMatchedPaswword);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.unMatchedPasswordValidation);
    });

    test('Duplicate Email Validation', async () => {
        await registerPage.hardCodedRegister();
        await registerPage.fillEmail(utils.testUserEmail);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.duplicateEmailValidation);
    });

});