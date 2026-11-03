
export const supportedEnvironments = [
  "local",
  "qa",
  "staging",
] as const;

export type TestEnvironment =
  (typeof supportedEnvironments)[number];

export function getTestEnvironment(): TestEnvironment {
  const value = (process.env.TEST_ENV ?? "local").toLowerCase();

  if (
    !supportedEnvironments.includes(
      value as TestEnvironment
    )
  ) {
    throw new Error(
      `Invalid TEST_ENV="${value}". ` +
      `Allowed values: ${supportedEnvironments.join(", ")}`
    );
  }

  return value as TestEnvironment;
}
