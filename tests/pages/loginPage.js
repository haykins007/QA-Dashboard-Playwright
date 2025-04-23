<<<<<<< HEAD
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.signInButton = page.locator('button:has-text("Sign In")');
    }

    async goto() {
        await this.page.goto('/next/dashboards/g/2082/QA');
    }

    async enterEmail(email) {
        await this.emailInput.fill(email)
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password)
    }

    async clickSignInButton() {
        await this.signInButton.click()
    }
}
=======
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.signInButton = page.locator('button:has-text("Sign In")');
  }

  async goto() {
    await this.page.goto('/next/signin?ourl=%2Fnext%2Fdashboards%2Fg%2F2082%2FQA');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
};
>>>>>>> 0bbb606fffa4286e884fc3bf9391c67f4bdb0fbb
