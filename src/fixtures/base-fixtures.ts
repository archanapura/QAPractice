import { mergeTests } from "@playwright/test";
import { test as frameworkTest } from "./page-fixtures.js";
import { dataTest} from "./test-data-fixtures.js";

export const test = mergeTests(frameworkTest, dataTest);

export { expect } from "@playwright/test";