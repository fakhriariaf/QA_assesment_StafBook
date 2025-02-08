import cartPage from "../locator/cartPage";
import { expect } from "@playwright/test";

export default class cartActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.cartPage = new cartPage();
        this.cartList = page.locator(this.cartPage.cartList);
        this.btnCheckout = page.locator(this.cartPage.btnCheckout);
        this.txtHeaderPage = page.locator(this.cartPage.txtHeaderPage);
    }

    async cartClick() {
        await expect(this.txtHeaderPage).toHaveText('Your Cart');

        const cartItems = await this.cartList.allTextContents();
        expect(cartItems).toEqual([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
        ]);

        this.btnCheckout.click();
        await expect.toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    }

}