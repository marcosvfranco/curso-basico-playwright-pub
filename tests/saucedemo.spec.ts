import { test } from '@playwright/test';

test('Localizando por data-test-id', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByTestId('username').fill('Marcos');
});
