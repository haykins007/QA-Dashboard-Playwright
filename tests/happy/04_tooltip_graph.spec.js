import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import credentials from '../utils/credentials.json' assert {type: 'json'};

test('Tooltip should show timestamp if data is available', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail(credentials.email);
    await loginPage.enterPassword(credentials.password);
    await loginPage.clickSignInButton();

    const iframe = page.locator('iframe').first();
    const graph = iframe.contentFrame().locator('.u-over').first();

    await page.waitForTimeout(3000); // Keep this for now to allow potential animations

    await graph.hover();
    await graph.click()

    const tooltipTimestamp = await page.locator('iframe').first().contentFrame().locator('div')
        .filter({hasText: /^2025-01-26 06:00:00$/}).nth(1).textContent()

    await expect(tooltipTimestamp).toContain('06:00:00');
});