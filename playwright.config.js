// @ts-check
const { devices } = require('@playwright/test');
const path = require('path');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  // Timeout per test
  timeout: 30 * 1000,
  // Test directory
  testDir: path.join(__dirname, 'e2e'),
  // If a test fails on CI, retry it additional 2 times
  retries: process.env.CI ? 2 : 0,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: 'test-results/',

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },

  use: {
    // Retry a test if its failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
    // More information: https://playwright.dev/docs/trace-viewer
    trace: 'on',

    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
    baseURL: 'https://graphql-teas-endpoint.netlify.app/'
  },

  
};
module.exports = config;
