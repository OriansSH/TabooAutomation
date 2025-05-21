import { expect, test } from "@playwright/test";
import { execSync } from 'child_process';
import * as utils from '../utils.js';
import { GeneralPage } from "../GeneralPage.js";
import { ProfilePage } from "./profilePage.js";
import { profile } from "console";


test.describe('My Profile Tests', () => {
    let profilePage;
    let generalPage;
    test.beforeAll(() => {
        execSync('node __tests__/setup/login.setup.js', { stdio: 'inherit' });
    });

    test.use({ storageState: 'storage/loginState.json' });

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        profilePage = new ProfilePage(page);
        generalPage = new GeneralPage(page);
    });
    test('Taboo > My Profile > Edit profile > All fields are Disabled by default', async ({ page }) => {
        await generalPage.openUserMenu();
        await profilePage.clickOnMyProfileButton();
        await profilePage.myProfileDisabledField();
        const editProfileButton = page.locator(utils.myProfileWidget).getByText('Edit Profile');
        await expect(editProfileButton).toBeVisible();

    });
        test('Taboo > My Profile > Edit profile > Edit First Name', async ({ page }) => {
            await generalPage.openUserMenu();
            await profilePage.clickOnMyProfileButton();
            await profilePage.clickOnEditProfileButton();
            await profilePage.fillMyProfileFields(utils.firstNameField, 'AutomationEditFirst');
            const saveButton = await profilePage.clickOnSaveChangesButton();
            await expect(saveButton).toBeHidden();
        });
        test('Taboo > My Profile > Edit profile > Edit Last Name', async ({ page }) => {
            await generalPage.openUserMenu();
            await profilePage.clickOnMyProfileButton();
            await profilePage.clickOnEditProfileButton();
            await profilePage.fillMyProfileFields(utils.lastNameField, 'AutomationEditLast');
            const saveButton = await profilePage.clickOnSaveChangesButton();
            await expect(saveButton).toBeHidden();
        });
});