
import { test as base, expect } from "@playwright/test";
import {generateregistrationData} from "../testdata/dynamic/registration_data.js";

import {testUsers} from "../testdata/static/test-data.js";



// export const test = base.extend<{
//   practicePage:PracticePage}
//   >({
//   practicePage: async ({ page }, use) => {
//     const practicePage = new PracticePage(page);

//     await use(practicePage);
//   }
// });

type dataFixtures = {
  testUsers: typeof testUsers,
  registerdata: ReturnType<typeof generateregistrationData>
  
};
export const dataTest  = base.extend<dataFixtures>({
  testUsers: async ({}, use) => {

    await use(testUsers);
  },
  registerdata: async ({}, use) => {
    const data = generateregistrationData();
    await use(data);
  }
})

export { expect };

