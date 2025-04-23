import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};


test('UI elements like toolbar and export button should be visible', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email)
    await loginPage.enterPassword(credentials.password)
    await loginPage.clickSignInButton()

    await page.waitForTimeout(3000)
    const downloadButton = page.locator('button:has(svg[data-testid="CloudDownloadIcon"])');
    await expect(downloadButton).toBeVisible();
});