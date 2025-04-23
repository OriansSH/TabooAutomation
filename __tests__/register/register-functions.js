import { expect } from "@playwright/test";
import * as generalFunctions from '../general-functions';
import * as utils from '../utils';

// This is a HARD CODED function with static parameters.
export async function hardCodedRegister(page) {
            await generalFunctions.shadowRootRegister(page, utils.firstNameField, 'Test');
            await generalFunctions.shadowRootRegister(page, utils.lastNameField, 'LastTest');
            await generalFunctions.shadowRootRegister(page, utils.emailField, utils.uniqueEmail);
            await generalFunctions.shadowRootRegister(page, utils.passwordField, 'Orian154!');
            await generalFunctions.shadowRootRegister(page, utils.confirmPasswordField, 'Orian154!');
}
export async function consentHeadline(page) {
    const headline = page.getByText('Almost there');
    await expect(headline).toBeVisible();
}
export async function acceptButtonState(page, enabled) {
    const acceptButton = page.locator('button.submit-button');
    if (enabled) {
        await expect(acceptButton).toBeEnabled();
        await acceptButton.click();
    } else {
        await expect(acceptButton).toBeDisabled();
    }
}

export async function clickOnConsentCheckBoxes(page) {
    const checkboxes = page.locator('button.consent-checkbox');
    const count = await checkboxes.count();
    for ( let i = 0; i < count; i++) {
        await checkboxes.nth(i).click();
    }
}