import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions';
import * as utils from '../utils';
import * as contactUsFunctions from './contact-us-functions';
import { execSync } from 'child_process';

test.describe('Contact Us Tests', () => {
    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });
    test.use({ storageState: 'storage/loginState.json' });
    
    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        await generalFunctions.clickOnAvatarIcon(page);
    });

    test('Taboo > Contact us > Send message to support', async ({ page }) => {
        const contactUsButton = await contactUsFunctions.contactUsElement(page);
        await expect(contactUsButton).toBeVisible();
        await contactUsButton.click();
        await contactUsFunctions.fillContactUsForm(page, 'Automation Test message');
        const submitButton = await contactUsFunctions.contactUsSubmitButton(page);
        await expect(submitButton).toBeVisible();
        await submitButton.click();
        await expect(submitButton).toBeHidden();
    });
    test('Taboo > Contact us > Empty Message Validation', async ({ page }) => {
        const contactUsButton = await contactUsFunctions.contactUsElement(page);
        await expect(contactUsButton).toBeVisible();
        await contactUsButton.click();
        const submitButton = await contactUsFunctions.contactUsSubmitButton(page);
        await submitButton.click();
        await contactUsFunctions.contactUsValidation(page, utils.contactUsEmptyValidation);
        await expect(submitButton).toBeVisible();
    });
    test('Taboo > Contact us > Click on X Button to close the Form', async ({ page }) => {
        const contactUsButton = await contactUsFunctions.contactUsElement(page);
        await expect(contactUsButton).toBeVisible();
        await contactUsButton.click();
        await generalFunctions.clickOnXButton(page);
        await contactUsFunctions.contactUsHidden(page, expect);
    });

});