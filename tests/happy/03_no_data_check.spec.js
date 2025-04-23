import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};

test('Should display "No data" message when chart is empty', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email)
    await loginPage.enterPassword(credentials.password)
    await loginPage.clickSignInButton()
    await expect(page.locator('text=No data')).toBeVisible();
});