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