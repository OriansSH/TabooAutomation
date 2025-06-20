import { expect } from "@playwright/test";
import * as utils from '../utils.js';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginWidget = page.locator(utils.loginWidget);
        this.emailField = this.loginWidget.locator(utils.emailField);
        this.passwordField = this.loginWidget.locator(utils.passwordField);
        this.loginButton = this.loginWidget.locator(utils.loginButton);
        this.registerSignInButton = page.locator(utils.signInButtonInRegisterWidget);

        this.validationMessage = [
            'Email is required',
            'Password is required',
        ];
    }
    async fillEmail(email) {
        await this.emailField.fill(email);
    }
    async fillPassword(password) {
        await this.passwordField.fill(password);
    }
    async clickLoginButton() {
        await this.loginButton.click();
        return this.loginButton;
    }
    async login(email, password) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
        await Promise.all([
            this.page.waitForSelector(utils.avatarIcon, { state: 'visible' }),
        ]);
    }
    async expectEmptyFieldsValidations() {
        for (const text of this.validationMessage) {
            const locator = this.loginWidget.locator(`${utils.validationLocator}:has-text("${text}")`);
            await expect(locator).toHaveText(text);
        }
    }
    async expectGeneralError(expectedText) {
        const locator = this.loginWidget.locator(`${utils.registerValidationsLocator}:has-text("${expectedText}")`);
        await expect(locator).toHaveText(expectedText);
    }
    async loginGeneralErrorMessage(expectedText) {
        const locator = this.loginWidget.locator(`${utils.generalErrorLocator}:has-text("${expectedText}")`);
        await expect(locator).toHaveText(expectedText);
    }
    async clickSignInButtonInRegisterWidget() {
        await this.registerSignInButton.click();
    }
}