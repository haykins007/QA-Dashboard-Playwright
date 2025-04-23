import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};


test('PDF export button should trigger download in new tab', async ({page, context}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email);
    await loginPage.enterPassword(credentials.password);
    await loginPage.clickSignInButton();

    await page.locator('button:has(svg[data-testid="CloudDownloadIcon"])').click();
    await page.locator('[data-testid="AsyncActionDialog-okButton"]').click();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', {name: 'Download'}).click(),
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    expect(newPage.url()).toContain('.pdf');
});
