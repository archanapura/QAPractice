
import { test as base, expect } from "@playwright/test";
import { config } from "../config/config.js";

import  { QaPracticePage } from "../pages/QaPracticePage.js";
import  { Masterlogin } from "../pages/Masterlogin.js";
import  { RegisterPage } from "../pages/registerpage.js";

type FrameworkFixtures = {
  appUrl: string;
  qaPracticePage: QaPracticePage;
  masterlogin: Masterlogin;
  registerPage: RegisterPage;
};


export const test = base.extend<FrameworkFixtures>({
  appUrl: async ({}, use) => {
    await use(config.uiBaseUrl);
  },

  qaPracticePage : async ({ page }, use) => {
    const qaPracticePage = new QaPracticePage(page);
    await use(qaPracticePage);
  },
  masterlogin : async ({ page }, use) => {
    const masterlogin = new Masterlogin(page);
    await use(masterlogin);
  },
  registerPage : async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  }
});

export { expect };
