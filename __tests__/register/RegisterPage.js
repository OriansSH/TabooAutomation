import { expect } from "@playwright/test";
import * as utils from '../utils.js';

export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerWidget = page.locator(utils.registerWidget);
        this.firstNameField = this.registerWidget.locator(utils.firstNameField);
        this.lastNameField = this.registerWidget.locator(utils.lastNameField);
        this.emailField = this.registerWidget.locator(utils.emailField);
        this.passwordField = this.registerWidget.locator(utils.passwordField);
        this.confirmPasswordField = this.registerWidget.locator(utils.confirmPasswordField);
        this.createAccountButton = this.registerWidget.locator(utils.loginButton);
        this.consentHeadLine = page.locator(`text=${utils.consentHeadLine}`);
        this.consentCheckBox = page.locator(utils.consentCheckBox);
        this.consentAcceptButton = page.locator(utils.consentAcceptButton);
        this.registerSignInButton = page.locator(utils.signInButtonInRegisterWidget);
    }
    async verifyConsentHeadlineVisible() {
        await expect(this.consentHeadLine).toBeVisible();
    }
    async clickConsentCheckboxes() {
        const count = await this.consentCheckBox.count();
        for (let i = 0; i < count; i++) {
            await this.consentCheckBox.nth(i).click();
        }
    }
    async verifyAcceptButtonState(enabled = true) {
        if (enabled) {
            await expect(this.consentAcceptButton).toBeEnabled();
            await this.consentAcceptButton.click();
        } else {
            await expect(this.consentAcceptButton).toBeDisabled();
        }

    }
    async fillFirstName(firstname) {
        await this.firstNameField.fill(firstname);
    }
    async filllLastName(lastName) {
        await this.lastNameField.fill(lastName);
    }
    async fillEmail(email) {
        await this.emailField.fill(email);
    }
    async fillPassword(password) {
        await this.passwordField.fill(password);
    }
    async fillConfirmPassword(confirmPassword) {
        await this.confirmPasswordField.fill(confirmPassword);
    }
    async clickCreateAccountButton() {
        await this.createAccountButton.click();
        return this.createAccountButton;
    }
    async hardCodedRegister(email) {
        await this.fillFirstName('Automation');
        await this.filllLastName('User');
        await this.fillEmail(email);
        await this.fillPassword(utils.testUserPassword);
        await this.fillConfirmPassword(utils.testUserPassword);
        console.log('Registering Email:', utils.uniqueEmail);
    }
    async expectEmptyFieldValidationMessages() {
        const messages = [
            'First name is required',
            'Last name is required',
            'Invalid email address',
            'Password must be at least 6 characters long'
        ];
        for (const msg of messages) {
            const locator = this.registerWidget.locator(`${utils.registerValidationsLocator}:has-text("${msg}")`);
            await expect(locator).toHaveText(msg);
        }
    }

    async passwordAndExpectValidation(expectedMessage) {
        const validationLocator = this.registerWidget.locator(`${utils.registerValidationsLocator}:has-text("${expectedMessage}")`);
        await expect(validationLocator).toHaveText(expectedMessage);
    }
    async registerGeneralErrorMessage(expectedMessage) {
        const validationLocator = this.registerWidget.locator(`${utils.generalErrorLocator}:has-text("${expectedMessage}")`);
        await expect(validationLocator).toHaveText(expectedMessage);
    }
    async clickSignUpButtonInLoginWidget() {
        await this.registerSignInButton.click();
    }
}