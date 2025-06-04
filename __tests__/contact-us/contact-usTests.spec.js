import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import { execSync } from 'child_process';
import { ContactUsPage } from "./contactUsPage.js";
import { GeneralPage } from "../GeneralPage.js";

test.describe('Contact Us Tests', () => {
    let contactus;
    let generalPage;
    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });

    test.use({ storageState: 'storage/loginState.json' });

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        contactus = new ContactUsPage(page);
        generalPage = new GeneralPage(page);
    });
    test('Taboo > Contact us > Send message to support', async ({ page }) => {
        await generalPage.openUserMenu();
        await contactus.clickOnContactUsButton();
        await contactus.fillContactUsField('Automation Test message');
        const submitButton = await contactus.clickOnSubmitButton();
        await expect(submitButton).toBeVisible();
        await submitButton.click();
        await expect(submitButton).toBeVisible();
    });
    test('Taboo > Contact us > Empty Message Validation', async ({ page }) => {
        await generalPage.openUserMenu();
        await contactus.clickOnContactUsButton();
        const submitButton = await contactus.clickOnSubmitButton();
        await submitButton.click();
        await contactus.contactUsValidation(utils.contactUsEmptyValidation);
    });
    test('Taboo > Contact us > My Profile Widget >  Send message to support via My Profile Widget', async ({ page }) => {
        await generalPage.openUserMenu();
        await contactus.clickOnMyProfileButton();
        await contactus.clickOnSupportViaProfile();
        await contactus.fillContactUsField('Automation Test message Via My Profile Widget');
        const submitButton = await contactus.clickOnSubmitButton();
        await expect(submitButton).toBeVisible();
        await submitButton.click();
        await expect(submitButton).toBeHidden();
    });
});