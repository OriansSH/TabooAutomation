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

}