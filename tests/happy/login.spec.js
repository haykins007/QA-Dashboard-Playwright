const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { validUser } = require('../utils/testData');

test('Happy Path - Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(validUser.email, validUser.password);
  await expect(page).toHaveURL(/.*dashboards/);
});