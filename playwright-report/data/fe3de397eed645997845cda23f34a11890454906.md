# Test info

- Name: Should display "No data" message when chart is empty
- Location: /Users/haykins/Downloads/qa-dashboard-updated file/tests/happy/03_no_data_check.spec.js:5:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('text=No data')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('text=No data')
    - waiting for navigation to finish...
    - navigated to "https://qa-test.intellisense.io/next/dashboards/g/2082/QA"

    at /Users/haykins/Downloads/qa-dashboard-updated file/tests/happy/03_no_data_check.spec.js:11:48
```

# Page snapshot

```yaml
- button "Menu"
- separator
- heading "QA Automation test Project" [level=3]
- button "2024-12-10, 10:01 to 2025-03-13, 23:55 UTC+00:00":
  - text: 2024-12-10, 10:01
  - paragraph: to
  - text: 2025-03-13, 23:55 UTC+00:00
- button "show 0 new notifications": Notifications
- button "add"
- link "qateam-auto+guest@intellisense.io":
  - /url: /next/profile
- navigation "breadcrumb":
  - list:
    - listitem:
      - paragraph:
        - link "Home":
          - /url: /next/home
    - listitem:
      - paragraph:
        - link "Dashboards":
          - /url: /next/dashboards
    - listitem:
      - paragraph: QA Automation test Project
- button
- button
- iframe
- alert
```

# Test source

```ts
   1 | import {test, expect} from "@playwright/test";
   2 | import {LoginPage} from "../pages/loginPage";
   3 | import credentials from '../utils/credentials.json' assert {type: 'json'};
   4 |
   5 | test('Should display "No data" message when chart is empty', async ({page}) => {
   6 |     const loginPage = new LoginPage(page);
   7 |     await loginPage.goto();
   8 |     await loginPage.enterEmail(credentials.email)
   9 |     await loginPage.enterPassword(credentials.password)
  10 |     await loginPage.clickSignInButton()
> 11 |     await expect(page.locator('text=No data')).toBeVisible();
     |                                                ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  12 | });
```