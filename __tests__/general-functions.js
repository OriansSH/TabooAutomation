import { expect } from "@playwright/test";
import * as utils from './utils.js';

export async function openRegisterForm(page) {
    const registerForm = page.locator('.header--auth--sign-up');
    await registerForm.click();
}
export async function openLoginForm(page) {
    const loginForm = page.locator('.header--auth--login');
    await loginForm.click();
}
export async function shadowRootRegister(page, field, input) {
    const fieldInput = page.locator('pce-register').locator(field);
    await fieldInput.fill(input);
}
export async function clickLoginButton(page) {
    const loginButton = page.locator('pce-log-in').locator('button[type="submit"]');
    await loginButton.click();
    return loginButton;
}
export async function clickRegisterButton(page) {
    const registerButton = page.locator('pce-register').locator('button[type="submit"]');
    await registerButton.click();
    return registerButton;
}
export async function getValidationLocator(page, expectedText) {
    return page.locator('pce-register').locator(`.error-message:has-text("${expectedText}")`);
}

export async function registerValidationText(page) {
    const messages = [
        'First name is required',
        'Last name is required',
        'Invalid email address',
        'Password must be at least 6 characters long'
    ];
    for (const text of messages) {
        const locator = page.locator('pce-register').locator(`p.error-message:has-text("${text}")`);
        await expect(locator).toHaveText(text);
    }
}
export async function loginProcess(page) {
    await loginFunctions.shadowRootLogin(page, utils.emailField, utils.testUserEmail);
    await loginFunctions.shadowRootLogin(page, utils.passwordField, utils.testUserPassword);
    const registerButton = await clickLoginButton(page);
    await expect(registerButton).toBeHidden();
}
export async function clickOnAvatarIcon(page) {
    const menu = page.locator('.header--actions--avatar');
    await menu.click();
    return menu;
}
export async function clickOnGameLobby(page, gameName) {
    const game = page.getByRole('button', { name: gameName }).nth(0);
    await game.click();
}
export async function logOutButton(page) {
    const logoutButton = page.locator('.side-menu-container--menu--table--entry.sign-out');
    return logoutButton;
}
export async function clickOnXButton(page) {
    await page.locator('.modal-container--modal--close').click();
}
