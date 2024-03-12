// https://the-internet.herokuapp.com/
import { expect, test } from '@playwright/test';
// https://www.saucedemo.com/v1/

// test suites
// Logins de sucesso
// Falhas de Login
test.describe('Logins de sucesso', async () => {
    test('Usuário e senha corretos - usuário comum', async({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('input#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
        const productsLabel = page.locator('div.product_label');
        await expect(productsLabel).toHaveText('Products');
    })
})

test.describe('Falhas no Login', async () => {
    test('Login com usuario locked', async({ page }) => {
        const errorLabel = page.locator('[data-test="error"]');

        await page.goto('https://www.saucedemo.com/v1/');
        await expect(errorLabel).toBeHidden();

        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('input#login-button').click();

        await expect(errorLabel).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        await expect(errorLabel).toBeVisible();
    })

    test('Login senha errada', async({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('asdf');
        await page.locator('input#login-button').click();

        const errorLabel = page.locator('[data-test="error"]');
        await expect(errorLabel).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await expect(errorLabel).toBeVisible();
    })
})
