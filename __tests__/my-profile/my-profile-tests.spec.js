import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions';
import * as myProfileFunctions from './my-profile-functions';
import * as utils from '../utils.js';
import { execSync } from 'child_process';

test.describe('My Profile Tests', () => {

    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });

    test.use({ storageState: 'storage/loginState.json' });

    test.beforeEach(async ({ page }) => {

        await page.goto(utils.urlEnv);
    });

    test('Taboo > My Profile > Edit profile > All Fileds are Disabled by default', async ({ page }) => {
        await generalFunctions.clickOnAvatarIcon(page);
        await myProfileFunctions.customerProfileButton(page);
        await myProfileFunctions.myProfileDisabledField(page, expect);
        const editProfileButton = page.locator(utils.myProfileWidget).getByText('Edit Profile');
        await expect(editProfileButton).toBeVisible();
    });
    test('Taboo > My Profile > Edit profile > Edit First Name', async ({ page }) => {
        await generalFunctions.clickOnAvatarIcon(page);
        await myProfileFunctions.customerProfileButton(page);
        await myProfileFunctions.clickEditProfileButton(page);
        await myProfileFunctions.fillMyProfileFields(page, utils.firstNameField, 'Test');
        await myProfileFunctions.fillMyProfileFields(page, utils.lastNameField, 'Test');
        const saveButton = await myProfileFunctions.saveChangesButton(page);
        await expect(saveButton).toBeHidden();
    });
});