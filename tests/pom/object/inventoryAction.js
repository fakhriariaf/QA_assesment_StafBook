import inventoryPage from "../locator/inventoryPage";
import { expect } from "@playwright/test";

export default class inventoryActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.inventoryPage = new inventoryPage();
        this.addCartBackpack = page.locator(this.inventoryPage.addCartBackpack);
        this.addCartBike = page.locator(this.inventoryPage.addCartBike);
        this.iconCart = page.locator(this.inventoryPage.iconCart);
        this.removeBackpack = page.locator(this.inventoryPage.removeBackpack);
        this.removeBike = page.locator(this.inventoryPage.removeBike);
        this.txtHeaderPage = page.locator(this.inventoryPage.txtHeaderPage);
        this.countCart = page.locator(this.inventoryPage.countCart);
    }

    async inventoryClick() {
        await expect(this.txtHeaderPage).toHaveText('Products');
        
        await this.addCartBackpack.click();
        await expect(this.removeBackpack).toHaveText('Remove');
        
        await this.addCartBike.click();
        await expect(this.removeBike).toHaveText('Remove');
        await expect(this.countCart).toHaveText('2');
        
        await this.iconCart.click();
        await expect.toHaveURL('https://www.saucedemo.com/cart.html');
    }
}