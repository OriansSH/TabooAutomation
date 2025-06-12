import { expect, test } from "@playwright/test";
import * as utils from '../utils.js';
import { LobbyPage } from "./lobbyPage";
import { GeneralPage } from '../GeneralPage.js';

test.describe('Taboo > Lobby > Lobby Tests', () => {
    let lobbyPage;
    let generalPage

    test.beforeEach(async ({ page }) => {
        await page.goto(utils.urlEnv);
        lobbyPage = new LobbyPage(page);
        generalPage = new GeneralPage(page);
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
    test('Taboo > Lobby > Category > Click on All Category', async ({ page }) => {
        await lobbyPage.clickOnCategories('All');
    });
    test('Taboo > Lobby > Category > Click on Exclusive Category', async ({ page }) => {
        await lobbyPage.clickOnCategories('Exclusive');
    });
    test('Taboo > Lobby > Category > Click on New Releases Category', async ({ page }) => {
        await lobbyPage.clickOnCategories('New Releases');
    });
    test('Taboo > Lobby > Category > Click on Hot Category', async ({ page }) => {
        await lobbyPage.clickOnCategories('Hot');
    });
    test('Taboo > Lobby > Search > Click and Search gmae', async ({ page }) => {
        await lobbyPage.clickAndSearchGame('Majestic King');
        await generalPage.clickOnGameLobby(utils.gameMajesticKing);
    });
});