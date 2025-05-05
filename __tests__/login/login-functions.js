import { expect } from "@playwright/test";
import * as utils from '../utils.js';


export async function shadowRootLogin(page, field, input) {
    const fieldInput = page.locator(utils.loginWidget).locator(field);
    await fieldInput.fill(input);
}
export async function loginValidationText(page) {
    const messages = [
        'Invalid email address',
        'login.form.inputs.errors.email.min',
    ];
    for (const text of messages) {
        const locator = page.locator(utils.loginWidget).locator(`p.error-message:has-text("${text}")`);
        await expect(locator).toHaveText(text);
    }
}
export async function loginGeneralError(page, text) {
    return page.locator(utils.loginWidget).locator(`.error-message:has-text("${text}")`);
}
export async function loginClickOnXButton(page) {
    const xButton = page.locator('.modal-container--modal--close');
    return xButton;
}