import { expect, test } from '@playwright/test';

test('Localizando por data-test-id', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByTestId('username').fill('Marcos');
});

test('Asserts básicos', async({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  const loginButton = await page.locator('input#login-button');
  await expect.soft(loginButton).toHaveCSS('background-color','rgb(226, 35, 26)');
  await expect(loginButton).not.toHaveCSS('background-color','rgb(0, 0, 0)');
  await expect(loginButton).toHaveAttribute('value','LOGIN');
  await expect.soft(loginButton, 'Botão está visível').toBeVisible();
  await expect(loginButton).not.toHaveCSS('background-color','rgb(0, 0, 0)');
})
