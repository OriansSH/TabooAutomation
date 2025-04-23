# Test info

- Name: Register Tests >> Taboo > Valid Register Process
- Location: /home/orians/taboo/__tests__/login/login-tests.spec.js:28:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeHidden()

Locator: locator('pce-register').locator('button[type="submit"]')
Expected: hidden
Received: visible
Call log:
  - expect.toBeHidden with timeout 5000ms
  - waiting for locator('pce-register').locator('button[type="submit"]')
    9 × locator resolved to <button type="submit" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 submit-button">Create Account</button>
      - unexpected value "visible"

    at /home/orians/taboo/__tests__/login/login-tests.spec.js:38:38
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import * as generalFunctions from '../general-functions';
   3 | import * as utils from '../utils';
   4 |
   5 |
   6 |
   7 | test.describe('Login Tests', () => {
   8 |     test.beforeEach(async ({ page }) => {
   9 |         await page.goto(utils.urlEnv);
  10 |         await generalFunctions.clickOnSignUpbutton(page);
  11 |     });
  12 |
  13 |     test('Taboo > Valid Login Test', async ({ page }) => {
  14 |         // await page.pause();
  15 |         await generalFunctions.shadowRootLogin(page, '#email', 'or@gmail.com');
  16 |         await generalFunctions.shadowRootLogin(page, '#password', 'Orian154');
  17 |         const registerButton = await generalFunctions.clickLoginButton(page);
  18 |         await expect(registerButton).toBeHidden();
  19 |     });
  20 | });
  21 |
  22 | test.describe('Register Tests', () => {
  23 |     test.beforeEach(async ({ page }) => {
  24 |         await page.goto(utils.urlEnv);
  25 |         await generalFunctions.clickOnSignUpbutton(page);
  26 |     });
  27 |
  28 |     test('Taboo > Valid Register Process', async ({ page }) => {
  29 |         // await page.pause()
  30 |         await generalFunctions.openRegisterForm(page);
  31 |         await generalFunctions.shadowRootRegister(page, utils.firstNameField, 'Test');
  32 |         await generalFunctions.shadowRootRegister(page, utils.lastNameField, 'LastTest');
  33 |         await generalFunctions.shadowRootRegister(page, utils.emailField, utils.formattedDate);
  34 |         await page.pause();
  35 |         await generalFunctions.shadowRootRegister(page, utils.passwordField, 'Orian154');
  36 |         await generalFunctions.shadowRootRegister(page, utils.confirmPasswordField, 'Orian154');
  37 |         const registerButton = await generalFunctions.clickRegisterButton(page);
> 38 |         await expect(registerButton).toBeHidden();
     |                                      ^ Error: Timed out 5000ms waiting for expect(locator).toBeHidden()
  39 |     });
  40 | });
```