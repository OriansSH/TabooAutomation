import { test, expect } from '@playwright/test';
import * as generalFunctions from '../general-functions';
import * as myProfileFunctions from './my-profile-functions';

test.describe('My Profile Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://stage2.quotecores.com/');
        await generalFunctions.openLoginForm(page);
        await generalFunctions.loginProcess(page);
    });

    test('Taboo > My Profile > Edit profile > All Fileds are Disabled by default', async ({ page }) => {
        await generalFunctions.clickOnAvatarIcon(page);
        await myProfileFunctions.customerProfileButton(page);
        await myProfileFunctions.myProfileDisabledField(page,expect);
        const editProfileButton = page.locator('pce-my-profile').getByText('Edit Profile');
        await expect(editProfileButton).toBeVisible();
    });
    test('Taboo > My Profile > Edit profile > Edit First Name', async ({ page }) => {
        await generalFunctions.clickOnAvatarIcon(page);
        await myProfileFunctions.customerProfileButton(page);
        await myProfileFunctions.clickEditProfileButton(page);
        await myProfileFunctions.fillMyProfileFields(page, '#firstName', 'Test');
        await myProfileFunctions.fillMyProfileFields(page, '#lastName', 'Test');
        const saveButton =  await myProfileFunctions.saveChangesButton(page);
        await expect(saveButton).toBeHidden();
    });
});