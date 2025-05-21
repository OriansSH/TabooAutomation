import { expect } from '@playwright/test';
import * as utils from '../utils.js';

export class ProfilePage {
    constructor(page) {
        this.page = page;
        this.profileWidget = page.locator(utils.myProfileWidget);
        this.customerProfileButton = page.locator(utils.myProfileLocator);

    }
    async clickOnMyProfileButton() {
        await this.customerProfileButton.click();
    }
    async clickOnEditProfileButton() {
            const editProfileButton = this.profileWidget.getByText('Edit Profile');
            await editProfileButton.click();
            return editProfileButton;
    }
    async fillMyProfileFields(field, input) {
        const profileField = this.profileWidget.locator(field);
        await profileField.fill(input);
    }
    async clickOnSaveChangesButton() {
        const saveButton = this.page.getByRole('button', { name: 'Save changes' });
        await saveButton.click();
        return saveButton;
    }

    async myProfileDisabledField() {
        const fields = [
            '#firstName',
            '#lastName',
            '#address',
            '#city',
            '#zipCode'
        ];
        for (const text of fields) {
            const disabledField = this.profileWidget.locator(`${text}`);
            await expect(disabledField).toBeDisabled();
        }

        const disabledStateDropdown = this.profileWidget.locator('button[role="combobox"]');
        await expect(disabledStateDropdown).toBeDisabled();
    }
}