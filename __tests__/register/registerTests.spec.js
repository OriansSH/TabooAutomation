import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import { RegisterPage } from './RegisterPage.js';
import { GeneralPage } from '../GeneralPage.js';

test.describe('Taboo > Register Widget Tests', () => {
    let registerPage;
    let generalPage;
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        registerPage = new RegisterPage(page);
        generalPage = new GeneralPage(page);
        await generalPage.openRegisterForm();
    });
    test('Taboo > Register Widget > Valid Register Process', async ({ page }) => {
        await page.pause();
        const email = utils.generateUniqueEmail();
        await registerPage.hardCodedRegister(email);
        const createAccountButton = await registerPage.clickCreateAccountButton();
        await expect(createAccountButton).toBeHidden();
        await registerPage.verifyConsentHeadlineVisible();
        await registerPage.verifyAcceptButtonState(false);
        await registerPage.clickConsentCheckboxes();
        await registerPage.verifyAcceptButtonState(true);
        await generalPage.openUserMenu();
    });
    test('Taboo > Register Widget > Customer Register Via Sign Up button in Login Widget', async ({ page }) => {
        const email = utils.generateUniqueEmail();
        await generalPage.clickOnXButton();
        await generalPage.openLoginForm();
        await registerPage.clickSignUpButtonInLoginWidget();
        await registerPage.hardCodedRegister(email);
        const createAccountButton = await registerPage.clickCreateAccountButton();
        await expect(createAccountButton).toBeHidden();
        await registerPage.verifyConsentHeadlineVisible();
        await registerPage.verifyAcceptButtonState(false);
        await registerPage.clickConsentCheckboxes();
        await registerPage.verifyAcceptButtonState(true);
        await generalPage.openUserMenu();
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
        const email = utils.generateUniqueEmail();
        await registerPage.hardCodedRegister(email);
        await registerPage.fillPassword(utils.specialPassword);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.specialCharValidation);
    });

    test('Password Field - Missing Number Validation', async () => {
        const email = utils.generateUniqueEmail();
        await registerPage.hardCodedRegister(email);
        await registerPage.fillPassword(utils.oneDigitPassword);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.oneDigitValidation);
    });
    test('Password Field - UnMatched Password Validation', async () => {
        const email = utils.generateUniqueEmail();
        await registerPage.hardCodedRegister(email);
        await registerPage.fillConfirmPassword(utils.unMatchedPaswword);
        await registerPage.clickCreateAccountButton();
        await registerPage.passwordAndExpectValidation(utils.unMatchedPasswordValidation);
    });

    test('Duplicate Email Validation', async () => {
        const email = utils.generateUniqueEmail();
        await registerPage.hardCodedRegister(email);
        await registerPage.fillEmail(utils.testUserEmail);
        await registerPage.clickCreateAccountButton();
        await registerPage.registerGeneralErrorMessage(utils.duplicateEmailValidation);
    });

});