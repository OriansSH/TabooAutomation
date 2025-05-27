import { expect } from '@playwright/test';
import * as utils from '../utils';

export class ContactUsPage {
    constructor(page) {
        this.page = page;
        this.contactUsWidget = page.locator(utils.contactUsWidget);
        this.contactUsButton = page.locator(utils.contactUsLocator)
        this.contactUsField = this.contactUsWidget.locator(utils.contactUsMessageId);
        this.submitButton = page.locator(utils.contactUsSubmitButton);
        this.customerProfileButton = page.locator(utils.myProfileLocator);
        this.supportButtonInMyProfile = page.locator(utils.supportButtonViaProfile);

    }
    async clickOnContactUsButton() {
        await this.contactUsButton.click();
    }
    async fillContactUsField(input) {
        await this.contactUsField.fill(input);
    }
    async clickOnSubmitButton() {
        return this.submitButton;
    }
    async contactUsValidation(Validation) {
        const validationLocator = this.contactUsWidget.locator(`${utils.generalErrorLocator}:has-text("${Validation}")`);
        await expect(validationLocator).toHaveText(Validation);
    }
    async clickOnXButton(page) {
        await page.locator('.modal-container--modal--close').click();
    }
    async contactUsHidden(page, expect) {
        await expect(page.locator('div.font-semibold.title', { hasText: 'Contact Us' })).toBeHidden();
    }
    async clickOnMyProfileButton() {
        await this.customerProfileButton.click();
    }
    async clickOnSupportViaProfile() {
        await this.supportButtonInMyProfile.click();
    }
}