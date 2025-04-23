const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { invalidUser } = require('../utils/testData');

test('Unhappy Path - Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalidUser.email, invalidUser.password);
  await expect(page).toHaveURL(/.*signin/); // Still on login page
});