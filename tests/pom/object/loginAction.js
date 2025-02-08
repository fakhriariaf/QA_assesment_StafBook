import loginPage from "../locator/loginPage";
import { expect } from "@playwright/test";

export default class LoginActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage();
        this.usernameInput = page.locator(this.loginPage.usernameInput);
        this.passwordInput = page.locator(this.loginPage.passwordInput);
        this.loginButton = page.locator(this.loginPage.loginButton);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login() {
        await this.usernameInput.fill('standard_user');
        await expect(this.usernameInput).toHaveValue('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await expect(this.passwordInput).toHaveValue('secret_sauce');
        await this.loginButton.click();

        await expect.toHaveURL('https://www.saucedemo.com/inventory.html');


    }
}