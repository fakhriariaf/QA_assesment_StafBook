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
        this.messageError = page.locator(this.loginPage.messageError);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        await expect.toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async logininvalid(username, password, expectedError) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    
        // Verifikasi error message muncul
        await expect(this.messageError).toBeVisible();
        await expect(this.messageError).toHaveText(expectedError);
    }
}