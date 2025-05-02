import { expect } from "@playwright/test";
import checkoutPage from "../locator/checkoutPage";

export default class checkoutActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.checkoutPage = new checkoutPage();
        this.firstName = page.locator(this.checkoutPage.firstName);
        this.lastName = page.locator(this.checkoutPage.lastName);
        this.zipCode = page.locator(this.checkoutPage.zipCode);
        this.btnContinue = page.locator(this.checkoutPage.btnContinue);
        this.btnFinish = page.locator(this.checkoutPage.btnFinish); 
        this.txtHeaderInfo = page.locator(this.checkoutPage.txtHeaderInfo);
        this.txtHeaderOverview = page.locator(this.checkoutPage.txtHeaderOverview);
        this.txtComplete = page.locator(this.checkoutPage.txtComplete);
        this.listItemPrice = page.locator(this.checkoutPage.listItemPrice);
        this.subTotalPrice = page.locator(this.checkoutPage.subTotalPrice);
    }

    async checkoutClick() {
        await expect(this.txtHeaderInfo).toHaveText('Checkout: Your Information');

        await this.firstName.fill('Fakhri');
        await expect(this.firstName).toHaveValue('Fakhri');
        await this.lastName.fill('Aria');
        await expect(this.lastName).toHaveValue('Aria');
        await this.zipCode.fill('45411');
        await expect(this.zipCode).toHaveValue('45411');

        await this.btnContinue.click();
        await expect.toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        
        await expect(this.txtHeaderOverview).toHaveText('Checkout: Overview');

        const priceElements = await this.listItemPrice.allTextContents();
        const parsePrice = (price) => parseFloat(price.replace("$", ""));
            let total = 0;
            for (const price of priceElements) {
            total += parsePrice(price);
            }

        const subtotalText = await this.subTotalPrice.textContent();
        const subtotalValue = parseFloat(subtotalText.replace("Item total: $", ""));

        console.log(`Calculated Total: $${total.toFixed(2)}`);
        console.log(`Subtotal from Page: $${subtotalValue.toFixed(2)}`);
        expect(total).toBeCloseTo(subtotalValue, 2);

        await this.btnFinish.click();
        await expect(this.txtComplete).toHaveText('Thank you for your order!');
    }

}