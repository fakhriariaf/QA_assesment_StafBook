import { test, expect } from '@playwright/test';
import LoginActions from './pom/object/loginAction.js';
import InventoryActions from './pom/object/inventoryAction.js';
import CartActions from './pom/object/cartAction.js';
import CheckoutActions from './pom/object/checkoutAction.js';

test.describe.serial('Website Sauce: Login to Checkout', () => {
    let page;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        
        // Buka halaman awal
        await new LoginActions(page).goto();
    });

    test('Login Action', async () => {
        const login = new LoginActions(page);
        await login.login('standard_user','secret_sauce');
    });

    test('Add Item Action', async () => {
        const inventory = new InventoryActions(page);
        await inventory.inventoryClick();
    });

    test('Cart List Action', async () => {
        const cart = new CartActions(page);
        await cart.cartClick();
    });

    test('Checkout Action', async () => {
        const checkout = new CheckoutActions(page);
        await checkout.checkoutClick();
    });

    test.afterAll(async () => {
        await page.close();
    });
});
