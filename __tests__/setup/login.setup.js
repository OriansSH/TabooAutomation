import { LoginPage } from '../login/LoginPage.js'
import { GeneralPage } from '../GeneralPage.js';
import * as utils from '../utils.js';
import { chromium } from 'playwright';


(async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(utils.urlEnv);
    const generalPage = new GeneralPage(page);
    const loginPage = new LoginPage(page)
    
    await generalPage.openLoginForm();
    await loginPage.login(utils.testUserEmail, utils.testUserPassword);
    await page.waitForTimeout(1000);

    await context.storageState({ path: 'storage/loginState.json' });
    await browser.close();

})();