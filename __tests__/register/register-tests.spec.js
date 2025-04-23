import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions';
import * as utils from '../utils';
import * as registerFunctions from './register-functions';


test.describe('Taboo > Register Widget Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        await generalFunctions.clickOnSignUpbutton(page);
    });

    test('Taboo > Valid Register Process', async ({ page }) => {
        await registerFunctions.hardCodedRegister(page);
        const registerButton = await generalFunctions.clickRegisterButton(page);
        await expect(registerButton).toBeHidden();
        await registerFunctions.consentHeadline(page);
        await registerFunctions.acceptButtonState(page, false);
        await registerFunctions.clickOnConsentCheckBoxes(page);
        await registerFunctions.acceptButtonState(page, true);
        await generalFunctions.clickOnAvatarIcon(page);
    });
});

test.describe('Taboo > Register Widget > Validations Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        await generalFunctions.clickOnSignUpbutton(page);
    });

    test('Taboo > Register Widget > Empty Fields > Validation', async ({ page }) => {
        const registerButton = await generalFunctions.clickRegisterButton(page);
        await expect(registerButton).toBeVisible();
        await generalFunctions.registerValidationText(page);
    });
    test('Taboo > Register Widget > Password Field > Special Character Validation', async ({ page }) =>{
        await generalFunctions.shadowRootRegister(page, utils.passwordField, 'specialChar1');
        await generalFunctions.clickRegisterButton(page);
        const specialCharValidation=  await generalFunctions.getValidationLocator(page, utils.specialCharValidation);
        await expect(specialCharValidation).toHaveText(utils.specialCharValidation);
    });
    test('Taboo > Register Widget > Password Field > At Least One Digit Validation', async ({ page }) =>{
        await generalFunctions.shadowRootRegister(page, utils.passwordField, 'testval');
        await generalFunctions.clickRegisterButton(page);
        const specialCharValidation=  await generalFunctions.getValidationLocator(page, utils.oneDigitValidation);
        await expect(specialCharValidation).toHaveText(utils.oneDigitValidation);
    });
});