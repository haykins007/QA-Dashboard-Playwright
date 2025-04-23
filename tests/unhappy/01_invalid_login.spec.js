import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};


test('Login with invalid credentials should fail', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('credentials@email.co.uk')
    await loginPage.enterPassword('credentials+password')
    await loginPage.clickSignInButton()
    await expect(page).toHaveURL(/.*signin/);
});

test('Login with invalid email', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('credentials@email')
    await loginPage.enterPassword(credentials.password)
    await loginPage.clickSignInButton()
    await expect(page).toHaveURL(/.*signin/); // Add a proper error message
});

test('Login with invalid password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email)
    await loginPage.enterPassword('credentials+password')
    await loginPage.clickSignInButton()
    await expect(page).toHaveURL(/.*signin/); // Add a proper error message
});