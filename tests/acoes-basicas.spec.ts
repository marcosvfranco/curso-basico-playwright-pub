// https://the-internet.herokuapp.com/
import { expect, test } from '@playwright/test';

test.only('Ações Básicas 1', async({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const emailInput = page.locator('input#email');
    await emailInput.fill('startqa@hotmail.com');
    await emailInput.fill('');
    await emailInput.pressSequentially('123456');
    await expect(emailInput).toHaveValue('123456');

    // page.click()
    await page.goto('https://the-internet.herokuapp.com/');
    const checkboxesLink = page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();

    // checkboxes
    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    await checkbox1.check();
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    await checkbox2.uncheck();

    await expect(checkbox2).not.toBeChecked();
})

