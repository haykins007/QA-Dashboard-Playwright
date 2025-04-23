import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";


test('Login with blank credentials should fail', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('')
    await loginPage.enterPassword('')
    await expect(page).toHaveURL(/.*signin/);
});

test('Login with blank email should fail', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('')
    await loginPage.enterPassword('password')
    await expect(page).toHaveURL(/.*signin/);
});

test('Login with blank password should fail', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('credential@gmail.com')
    await loginPage.enterPassword('')
    await expect(page).toHaveURL(/.*signin/);
});