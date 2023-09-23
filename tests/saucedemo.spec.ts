import { expect, test } from '@playwright/test';

test('Localizando por data-test-id', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByTestId('username').fill('Marcos');
});

test('Asserts básicos', async({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  const button = page.locator('input[id="login-button"]');
  await expect(button).toHaveCSS('background-color', 'rgb(226, 35, 26)');
  await expect(button).toHaveAttribute('value','LOGIN');
  await expect(button).toBeVisible();
})
