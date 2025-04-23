import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};


test('Dashboard should load correctly after login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email)
    await loginPage.enterPassword(credentials.password)
    await loginPage.clickSignInButton()
    await page.waitForTimeout(3000)
    expect(await page.title()).toContain('QA');

});