import { loginProcess, openLoginForm } from '../general-functions.js';
import * as utils from '../utils.js';
import { chromium } from 'playwright';


(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(utils.urlEnv);
    await openLoginForm(page);
    await loginProcess(page);

    await context.storageState({ path: 'storage/loginState.json' });
    await browser.close();

})();