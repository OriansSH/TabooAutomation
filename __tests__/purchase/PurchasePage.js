import { expect } from '@playwright/test';
import * as utils from '../utils.js';

export class Purchase {
    constructor(page) {
        this.page = page;
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

    }


    async clickOnPurchaseGoldButton() {
        await this.purchaseGold.click();
        expect(this.purchaseGold).toBeHidden();
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
}