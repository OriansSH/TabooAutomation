import { expect } from '@playwright/test';
import * as utils from '../utils.js';

export class Purchase {
    constructor(page) {
        this.page = page;
        const frame = page.frameLocator('iframe[title="Pay.com\'s universal frame"]');
        this.purchaseGold = page.locator(utils.purchaseGoldButton);
        this.purchaseSecret = page.locator(utils.purchaseSecretButton);
        this.toggleGold = page.locator(utils.toggleGoldButton);
        this.toggleSecret = page.locator(utils.toggleSecretButton);
        this.xButton = page.locator(utils.xButton);
        this.packageLocator = page.locator('div').filter({ hasText: /^500kGOLD COINS\+550Secret Coins\$500$/ }).getByRole('button');
        this.couponField = page.getByPlaceholder(utils.couponPlaceholder);
        this.couponButton = page.locator(utils.couponCodeButton)
        this.oldPrice = page.locator(utils.packageOldPriceClass);
        this.checkoutPurchaseButton = page.locator(utils.checkoutPurchaseButton);
        this.generalErrorLocator = page.locator(utils.generalErrorLocator);
        this.buyIconLocator = page.locator(utils.buyIcon);
        this.cardNumberField = frame.locator(utils.cardNumberLocator);
        this.cardExpiryField = frame.locator(utils.cardExpiryLocator);
        this.cardCvvField = frame.locator(utils.cardCvvLocator);
        this.cardNameField = frame.locator(utils.cardNameLocator);
        this.cardPayButtonLocator = frame.locator(utils.cardPayButtonLocator);
        this.confirmationMessageLocator = page.locator(utils.confirmationMessageLocator);
    }


    async clickOnPurchaseGoldButton() {
        await this.purchaseGold.click();
        // expect(this.purchaseGold).toBeHidden();
    }
    async clickOnPurchaseSecretButton() {
        await this.purchaseSecret.click();
    }
    async toggleGoldButton() {
        await this.toggleGold.click();
    }
    async toggleSecretButton() {
        await this.toggleSecret.click();
    }
    async clickOnXButton() {
        await this.xButton.click();
    }
    async selectPackage() {
        await this.packageLocator.click();
    }
    async fillCouponCode(couponCode) {
        await this.couponField.fill(couponCode);
    }
    async clickOnCouponButton() {
        await this.couponButton.click();
        return this.couponButton;
    }
    async verifyOldPriceVisible() {
        await expect(this.oldPrice).toBeVisible();
    }
    async clickOnCheckoutPurchaseButton() {
        await this.checkoutPurchaseButton.click();
        return this.checkoutPurchaseButton;
    }
    async verifyGeneralErrorVisible() {
        await expect(this.generalErrorLocator).toHaveText(utils.couponEmptyGeneraError);
    }
    async clickOnBuyIcon() {
        await this.buyIconLocator.click();
        return this.buyIconLocator;
    }
    async verifyStoreWidget() {
        const storeWidget = this.page.locator('.ple-title');
        await expect(storeWidget).toHaveText('Store');
        await expect(storeWidget).toBeVisible();
    }
  async fillPaymentDetails({ cardNumber = null, expiryDate = null, cvv = null, cardHolderName = null } = {}) {
    if (cardNumber !== null) await this.cardNumberField.fill(cardNumber);
    if (expiryDate !== null) await this.cardExpiryField.fill(expiryDate);
    if (cvv !== null) await this.cardCvvField.fill(cvv);
    if (cardHolderName !== null) await this.cardNameField.fill(cardHolderName);
  }
    async clickOnCardPayButton() {
        await frame.cardPayButtonLocator.click();
    }
    async verifyConfirmationMessage() {
        await expect(this.confirmationMessageLocator).toBeVisible();
        await expect(this.confirmationMessageLocator).toHaveText(utils.purchaseMessageText);
    }
}