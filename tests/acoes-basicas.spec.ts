// https://the-internet.herokuapp.com/
import { expect, test } from '@playwright/test';

test('Ações Básicas 1', async({ page }) => {
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

test('Ações Básicas 2', async({ page }) => {
    // dropdowns
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select#dropdown');

    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');
    await dropdown.selectOption({ label: 'Option 2'});
    await expect(dropdown).toHaveValue('2');

    // hover 
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const img1 = page.locator('div.figure').nth(0);
    const img2 = page.locator('div.figure').nth(1);
    const img3 = page.locator('div.figure').nth(2);

    const imgInfo1 = img1.locator('.figcaption');
    const imgInfo2 = img2.locator('.figcaption');
    const imgInfo3 = img3.locator('.figcaption');

    await img1.hover();

    await expect(imgInfo1).toBeVisible();
    await expect(imgInfo2).not.toBeVisible();
    await expect(imgInfo3).not.toBeVisible();

    await img2.hover();

    await expect(imgInfo1).not.toBeVisible();
    await expect(imgInfo2).toBeVisible();
    await expect(imgInfo3).not.toBeVisible();

    await imgInfo2.getByRole('link').click();
    // await imgInfo2.locator('a');

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/users/2');
})

