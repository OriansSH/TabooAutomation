import { expect } from '@playwright/test';
import * as utils from './utils.js';


export class GeneralPage {
    constructor(page) {
        this.page = page;
        this.avatarIcon = page.locator(utils.avatarIcon);
        this.logoutButton = page.locator(utils.logOutButton);
        this.locatorXButton = page.locator(utils.loginXButton);
    }
    async openLoginForm() {
        const loginFormTrigger = this.page.locator('.header--auth--login');
        await loginFormTrigger.click();
    }
    async openRegisterForm() {
        const registerForm = this.page.locator('.header--auth--sign-up');
        await registerForm.click();
    }
    async clickOngameLobby(gameName) {
        const game = this.page.getByRole('button', { name: gameName }).nth(0);
        await game.click();
    }
    async openUserMenu() {
        await expect(this.avatarIcon).toBeVisible({ timeout: 10000 });
        await this.avatarIcon.click();
    }
    async clickLogoutButton() {
        await this.logoutButton.click();
        await expect(this.logoutButton).toBeHidden();
    }
    async clickOnXButton() {
        await this.locatorXButton.click();
    }
    async  clickOnGameLobby(gameName) {
        const game = this.page.getByRole('button', { name: gameName }).nth(0);
        await game.click();
    }
    async closeGameIframe() {
        const xButton = this.page.locator('.ple-sr-only');
        await xButton.click();
    }
}