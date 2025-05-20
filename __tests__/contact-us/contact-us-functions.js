import { expect } from "@playwright/test";
import * as utils from '../utils';
export async function contactUsElement (page) {
    const contactUsButton = page.locator('.side-menu-container--menu--table--entry.contact-option');
    return contactUsButton;
}
export async function fillContactUsForm(page, input) {
    const contactUsField = page.locator(utils.contactUsWidget).locator('#message');
    await contactUsField.fill(input);
}
export async function contactUsSubmitButton(page) {
    const submitButton = page.locator('.ple-submit-button');
    return submitButton;
}
export async function contactUsValidation(page,Validation) {
     const validationLocator = page.locator(utils.contactUsWidget).locator(`.ple-error-message:has-text("${Validation}")`);
        await expect(validationLocator).toHaveText(Validation);
}
export async function clickOnXButton(page) {
    await page.locator('.modal-container--modal--close').click();
}
export async function contactUsHidden(page,expect) {
    await expect(page.locator('div.font-semibold.title', { hasText: 'Contact Us' })).toBeHidden();
}