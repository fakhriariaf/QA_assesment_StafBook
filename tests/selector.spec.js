import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe('Website Sauce', () => {

    test('Testcase Login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    
        const inputUsername = page.locator('#user-name');
        await inputUsername.fill('standard_user');
        await expect(inputUsername).toHaveValue('standard_user');
    
        const inputPassword = page.locator('#password');
        await inputPassword.fill('secret_sauce');
        await expect(inputPassword).toHaveValue('secret_sauce');
    
        const buttonLogin = page.locator('#login-button');
        await buttonLogin.click();
    
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        const addToCartButtonOne = page.locator('#add-to-cart-sauce-labs-backpack');
        await addToCartButtonOne.click();

        const removeButtonOne = page.locator('#remove-sauce-labs-backpack');
        await expect(removeButtonOne).toBeVisible();
        await expect(removeButtonOne).toHaveText('Remove');

        const addToCartButtonTwo = page.locator('#add-to-cart-sauce-labs-bike-light');
        await addToCartButtonTwo.click();

        const removeButtonTwo = page.locator('#remove-sauce-labs-bike-light');
        await expect(removeButtonTwo).toBeVisible();
        await expect(removeButtonTwo).toHaveText('Remove');

        const listShopping = page.locator('.shopping_cart_link');
        await listShopping.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

        const cartList = page.locator('[data-test="inventory-item-name"]');
        await expect(cartList.allTextContents()).resolves.toEqual([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
        ]);

        const checkoutButton = page.locator('#checkout');
        await checkoutButton.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

        const formName = page.locator('#first-name');
        await formName.fill('Fakhri');
        await expect(formName).toHaveValue('Fakhri');

        const formFirstName = page.locator('#last-name');
        await formFirstName.fill('Aria');
        await expect(formFirstName).toHaveValue('Aria');

        const formPostal = page.locator('#postal-code');
        await formPostal.fill('45411');
        await expect(formPostal).toHaveValue('45411');

        const continueButton = page.locator('#continue');
        await continueButton.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

        const priceElements = await page.locator('[data-test="inventory-item-price"]').all();
        const parseItemPrice = (price) => {
            return parseFloat(price.replace('$', ''));
        };

        const parseSubtotal = (subtotal) => {
            return parseFloat(subtotal.replace('Item total: $', ''));
        };

        let total = 0;
        for (const element of priceElements) {
            const priceText = await element.innerText();
            total += parseItemPrice(priceText);
        }

        const formattedTotal = `$${total.toFixed(2)}`;
        const subtotalElement = await page.locator('[data-test="subtotal-label"]').innerText();
        const subtotalValue = parseSubtotal(subtotalElement);

        console.log(`Calculated Total: ${formattedTotal}`);
        console.log(`Subtotal from Page: ${subtotalElement}`);
        await expect(total).toEqual(subtotalValue);

        const finishButton = page.locator('#finish');
        await finishButton.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

        const complete = page.locator('#checkout_complete_container');
        const completeHeaderText = page.locator('[data-test="complete-header"]');
        await expect(complete).toBeVisible();
        await expect(completeHeaderText).toHaveText('Thank you for your order!');
    
    });
    
});