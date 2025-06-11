import { expect } from 'allure-playwright';
import * as utils from '../utils.js';

export class LobbyPage {
    constructor(page) {
        this.page = page;
        this.termsOfService = page.locator(utils.termsofservice);
        this.headerTermsOfService = page.locator(utils.headerTermsOfService);
        this.sweepsPolicy = page.locator(utils.sweepsPolicy);
        this.headerSweepsPolicy = page.locator(utils.headerSweepPolicy);
        this.inviteFriendsPage = page.locator(utils.inviteFriends)
        this.headerInviteFriends = page.locator(utils.headerInviteFriends);
        this.privecyPolicy = page.locator(utils.privecyPolicy);
        this.headerPrivecyPolicy = page.locator(utils.headerPrivacyPolicy);
        this.lobbyRG = page.locator(utils.lobbyRG);
        this.headerRG = page.locator(utils.headerRG);
        this.categoriesLocator = page.locator(utils.categoriesLocator);
        this.searchLocator = page.getByRole(utils.searchLocator);
    }

    async clickOnTermsOfService() {
        await this.termsOfService.click();
        return this.termsOfService;
    }
    async verifyTermsOfServiceHeader() {
        await expect(this.headerTermsOfService).toBeVisible();
    }
    async clickOnSweepsPolicy() {
        await this.sweepsPolicy.click();
        return this.sweepsPolicy;
    }
    async verifySweepPolicyHeader() {
        await expect(this.headerSweepsPolicy).toBeVisible();
    }
    async clickOnInviteFriends() {
        await this.inviteFriendsPage.click();
        return this.inviteFriendsPage;
    }
    async verifyInviteFriendsHeader() {
        await expect(this.headerInviteFriends).toBeVisible();
    }
    async clickOnPrivacyPolicy() {
        await this.privecyPolicy.click();
        return this.privecyPolicy;
    }
    async verifyPrivacyPolicyHeader() {
        await expect(this.headerPrivecyPolicy).toBeVisible();
    }
    async clickOnRG() {
        await this.lobbyRG.click();
        return this.lobbyRG;
    }
    async verifyRGHeader() {
        await expect(this.headerRG).toBeVisible();
    }
    async clickOnCategories(name) {
        const categoryTab = this.categoriesLocator.filter({ hasText: name });
        await expect(categoryTab).toBeVisible();
        await categoryTab.click();
    }
    async clickAndSearchGame(gameName) {
        await this.searchLocator.click();
        await this.searchLocator.fill(gameName);
    }
}