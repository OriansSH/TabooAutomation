import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-cms.plaee.dev/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('morad@gmail.com');
  await page.getByTestId('email-input').press('Tab');
  await page.getByTestId('password-input').fill('Orian154!');
  await page.getByTestId('password-input').press('Enter');
  await page.getByTestId('login-button').click();
  await page.locator('#recommended_for_you').getByRole('button', { name: 'Play Majestic King' }).click();
  await page.locator('iframe[title="Majestic King"]').contentFrame().locator('canvas').click({
    position: {
      x: 830,
      y: 789
    }
  });
  await page.locator('iframe[title="Majestic King"]').contentFrame().locator('canvas').click({
    position: {
      x: 830,
      y: 789
    }
  });
});