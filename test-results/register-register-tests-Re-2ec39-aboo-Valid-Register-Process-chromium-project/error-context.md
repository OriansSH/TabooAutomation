# Test info

- Name: Register Tests >> Taboo > Valid Register Process
- Location: /home/orians/taboo/__tests__/register/register-tests.spec.js:12:5

# Error details

```
Error: expect(locator).toBeHidden()

Locator: locator('pce-register').locator('button[type="submit"]')
Expected: hidden
Received: visible
Call log:
  - expect.toBeHidden with timeout 5000ms
  - waiting for locator('pce-register').locator('button[type="submit"]')
    7 × locator resolved to <button type="submit" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 submit-button">Create Account</button>
      - unexpected value "visible"

    at /home/orians/taboo/__tests__/register/register-tests.spec.js:20:38
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import * as generalFunctions from '../general-functions';
   3 | import * as utils from '../utils';
   4 |
   5 |
   6 | test.describe('Register Tests', () => {
   7 |     test.beforeEach(async ({ page }) => {
   8 |         await page.goto(utils.urlEnv);
   9 |         await generalFunctions.clickOnSignUpbutton(page);
  10 |     });
  11 |
  12 |     test('Taboo > Valid Register Process', async ({ page }) => {
  13 |         await generalFunctions.openRegisterForm(page);
  14 |         await generalFunctions.shadowRootRegister(page, utils.firstNameField, 'Test');
  15 |         await generalFunctions.shadowRootRegister(page, utils.lastNameField, 'LastTest');
  16 |         await generalFunctions.shadowRootRegister(page, utils.emailField, utils.formattedDate);
  17 |         await generalFunctions.shadowRootRegister(page, utils.passwordField, 'Orian154');
  18 |         await generalFunctions.shadowRootRegister(page, utils.confirmPasswordField, 'Orian154');
  19 |         const registerButton = await generalFunctions.clickRegisterButton(page);
> 20 |         await expect(registerButton).toBeHidden();
     |                                      ^ Error: expect(locator).toBeHidden()
  21 |     });
  22 | });
```