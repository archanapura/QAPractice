
import { defineConfig, devices } from "@playwright/test";
import { config } from "./src/config/config.js";

// Worker count: environment variable > CI default > Playwright default
const configuredWorkers = process.env.TEST_WORKERS;

if (
  configuredWorkers !== undefined &&
  (!/^\d+$/.test(configuredWorkers) ||
    Number(configuredWorkers) < 1)
) {
  throw new Error("TEST_WORKERS must be a positive integer.");
}

const workers =
  configuredWorkers !== undefined
    ? Number(configuredWorkers)
    : process.env.CI
      ? 2
      : undefined;

export default defineConfig({
  // 1. Test discovery
  testDir: "./tests",
  testMatch: "**/*.spec.ts",

  // 2. Execution and timeouts
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  workers,
  retries: process.env.CI ? 2 : 0,

  // 3. Browser and browser behavior
  use: {
    baseURL: config.uiBaseUrl,
    headless: false,
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  // Run against Chromium initially
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  // 4. Test reports
  reporter: [
    ["list"],
    ["html", { open: "never" }],
  ],
});
