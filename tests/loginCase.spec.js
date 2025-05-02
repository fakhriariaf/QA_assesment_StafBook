import { test, expect } from '@playwright/test';
import LoginActions from './pom/object/loginAction.js';
import fs from 'fs';
import path from 'path';

test.describe('Login Case', () => {
    let login;

    const screenshotDir = path.join(__dirname, 'screenshots');
    test.beforeAll(() => {
        if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
        }
    });
    test.beforeEach(async ({ page }) => {
        login = new LoginActions(page);
        await login.goto();
      });

    test('TC-001 Login with credential Valid', async () => {
        await login.login('standard_user','secret_sauce');
    });

    test('TC-002 Login with credential invalid password', async () => {
        await login.logininvalid('standard_user','12345','Epic sadface: Username and password do not match any user in this service');
    });

    test('TC-003 Login with credential invalid user Locked', async () => {
        await login.logininvalid('locked_out_user','secret_sauce','Epic sadface: Sorry, this user has been locked out.');
    });

    test.afterEach(async ({ page }, testInfo) => {
        const status = testInfo.status === 'failed' ? 'fail' : 'pass';
        const title = testInfo.title.match(/TC-\d{3}/)?.[0] || 'TC-000';
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
        const caseDir = path.join(screenshotDir, title);
      
        if (!fs.existsSync(caseDir)) {
          fs.mkdirSync(caseDir, { recursive: true });
        }
      
        const screenshotName = `${status}-${timestamp}.png`;
        const screenshotPath = path.join(caseDir, screenshotName);
        await page.screenshot({ path: screenshotPath });
      });
});
