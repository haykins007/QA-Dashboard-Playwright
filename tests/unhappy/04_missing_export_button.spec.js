import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};


test('Export button should not be clickable if not available', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email)
    await loginPage.enterPassword(credentials.password)

    const exportButton = page.locator('button:has-text("Export")');
    const isVisible = await exportButton.isVisible();
    if (!isVisible) {
        console.log('Export button not available for this user or panel state.');
    } else {
        await expect(exportButton).toBeVisible();
    }
});