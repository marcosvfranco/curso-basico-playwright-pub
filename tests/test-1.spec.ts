import { test, expect } from '@playwright/test';

test('teste gravado por cliques', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('start qa marcos franco');
    await page.getByPlaceholder('Search').press('Enter');
    await page.locator('ytd-channel-renderer').filter({ hasText: 'Start QA - Marcos Franco Start QA - Marcos Franco @startqa•332 subscribersMarcos' }).locator('#avatar-section').getByRole('link').click();
    await expect(page.locator('#inner-header-container #text')).toHaveText('Start QA - Marcos Franco');
});