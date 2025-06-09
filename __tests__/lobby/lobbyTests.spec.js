import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import { LobbyPage } from "./lobbyPage";

test.describe('Taboo > Lobby > Footer Pages Tests', () => {
    let lobbyPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        lobbyPage = new LobbyPage(page);
    });
    test('Taboo > Not logged in customer > Fotter > Click on Terms Of Service', async () => {
        await lobbyPage.clickOnTermsOfService();
        await lobbyPage.verifyTermsOfServiceHeader();
    });
    test('Taboo > Not logged in customer > Fotter > Click on Sweep Policy', async () => {
        await lobbyPage.clickOnSweepsPolicy();
        await lobbyPage.verifySweepPolicyHeader();
    });
    test('Taboo > Not logged in customer > Fotter > Click on Invite Friends', async () => {
        await lobbyPage.clickOnInviteFriends();
        await lobbyPage.verifyInviteFriendsHeader();
    });
    test('Taboo > Not logged in customer > Fotter > Click on Privey Policy', async () => {
        await lobbyPage.clickOnPrivacyPolicy();
        await lobbyPage.verifyPrivacyPolicyHeader();
    });
    test('Taboo > Not logged in customer > Fotter > Click on RG', async () => {
        await lobbyPage.clickOnRG();
        await lobbyPage.verifyRGHeader();
    });
});