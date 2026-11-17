import { getTestEnvironment } from "./env.js";
import "dotenv/config";
import { z } from "zod";
// import { getTestEnvironment } from "./env";

const environment = getTestEnvironment();
const suffix = environment.toUpperCase();

function requiredVariable(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required configuration: ${name}`
    );
  }

  return value;
}

const urlSchema = z.string().url().refine(
  (value) => {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  },
  "URL must use HTTP or HTTPS"
);

function requiredUrl(name: string): string {
  const value = requiredVariable(name);
  const result = urlSchema.safeParse(value);

  if (!result.success) {
    throw new Error(
      `Invalid configuration for ${name}: expected a valid HTTP(S) URL`
    );
  }

  return result.data;
}

export const config = Object.freeze({
  environment,

  uiBaseUrl: requiredUrl(
    `UI_BASE_URL_${suffix}`
  // ),

  // apiBaseUrl: requiredUrl(
  //   `API_BASE_URL_${suffix}`
  // ),

  // username: requiredVariable(
  //   `TEST_USERNAME_${suffix}`
  // ),

  // password: requiredVariable(
  //   `TEST_PASSWORD_${suffix}`
   ),
});
