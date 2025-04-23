import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};


test('Tooltip should not appear if no chart data is present', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email)
    await loginPage.enterPassword(credentials.password)

    const noDataCount = await page.locator('text=No data').count();
    if (noDataCount > 0) {
        await expect(page.locator('.highcharts-tooltip')).toHaveCount(0);
    }
});