import { expect } from "@playwright/test";

export async function clickOnSignUpbutton(page) {
    const signUpButton = page.locator('.header--login');
    await signUpButton.click();
}
export async function openRegisterForm(page) {
    const registerForm = page.locator('pce-register').locator('.local-link');
    await registerForm.click();
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
    return page.locator('pce-register').locator(`p.error-message:has-text("${expectedText}")`);
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
    await shadowRootLogin(page, '#email', 'or@gmail.com');
    await shadowRootLogin(page, '#password', 'Orian154');
    const registerButton = await clickLoginButton(page);
    await expect(registerButton).toBeHidden();
}
export async function clickOnAvatarIcon(page) {
    const menu = page.locator('.header--actions--avatar');
    await menu.click();
}
