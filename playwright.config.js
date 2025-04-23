<<<<<<< HEAD
import {defineConfig} from "@playwright/test";


export default defineConfig({
=======
// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
>>>>>>> 0bbb606fffa4286e884fc3bf9391c67f4bdb0fbb
  testDir: './tests',
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
<<<<<<< HEAD
    headless: false,
    viewport: { width: 1900, height: 1080 },
=======
    headless: true,
    viewport: { width: 1280, height: 720 },
>>>>>>> 0bbb606fffa4286e884fc3bf9391c67f4bdb0fbb
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://qa-test.intellisense.io'
  }
});