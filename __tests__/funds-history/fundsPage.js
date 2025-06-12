import { expect } from 'allure-playwright';
import * as utils from '../utils.js';

export class FundsPage {
    constructor(page) {
        this.page = page;
        this.fundsWidget = page.locator(utils.fundsWidgetLocator);
        this.fundsHeadline = page.locator(utils.fundsHistoryHeadline)
        this.registrationRewardLocator = page.locator(utils.FundsHistoryRegistrationReward);
        this.xButton = page.locator(utils.xButton);

    }
    async clickOnFundsHistoryWidget() {
        await this.fundsWidget.click();
        await expect(this.fundsHeadline).toBeVisible();
        await expect(this.fundsWidget).toHaveText('Funds history');
    }
    async verifyRegistrationReward() {
        await expect(this.registrationRewardLocator).toBeVisible();
        await expect(this.registrationRewardLocator).toHaveText('Registration Reward');
    }
    async closeFundsHistoryWidget() {
        await this.xButton.click();
        await expect (this.fundsHeadline).not.toBeVisible();
    }
};