import { test } from '@playwright/test';

test('Visitando página do Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('.getStarted_Sjon').click();
});
