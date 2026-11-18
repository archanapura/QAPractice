# TypeScript and Playwright Installation(Manual Step 1 to 6)

Follow these steps to set up the TypeScript and Playwright automation framework.

## Prerequisites

- Node.js and npm installed
- Visual Studio Code or any preferred code editor

## Installation Steps

### 1. Initialize the Node.js Project

```bash
npm init -y
```

Initializes the Node.js project by creating a `package.json` file with default project metadata and configuration.

### 2. Install TypeScript

```bash
npm install --save-dev typescript
```

Installs TypeScript as a development dependency for type checking and compilation.

### 3. Install Playwright Test

```bash
npm install --save-dev @playwright/test
```

Installs Playwright Test for browser automation, test execution, and assertions.

### 4. Install Node.js Type Definitions

```bash
npm install --save-dev @types/node
```

Installs Node.js type definitions so TypeScript can recognize Node.js APIs.

### 5. Initialize TypeScript Configuration

```bash
npx tsc --init
```

Generates a `tsconfig.json` file to configure TypeScript compiler settings.

### 6. Install Playwright Browsers

```bash
npx playwright install
```

Downloads the browser binaries required to run Playwright tests.

## Verification

Verify the installed versions using the following commands:

```bash
node --version
npm --version
npx playwright
```
### 7. Install the configuration dependencies


Dotenv loads variables from your local .env file.
zod validates configuration values and reports missing or invalid settings clearly:
```bash
npm install dotenv zod
```

### 8. Auto installation of playwright project


Generates the initial Playwright project, including configuration, sample tests, and required dependencies
```bash
npm init playwright@latest
```
## Execution Commands
### 9.OTHER COMMANDS
```BASH
npx playwright test --list  -->LISTS NO OF TESTS
$env:TEST_ENV = "qa" -->PASS dynamic VALUE from cmd prompt (PROCESS.ENV.{VALUE})
npx playwright test
npx playwright test tests/runner-check.spec.ts -> INDIVIDUAL TEST
npx playwright show-report

```

### 10. Add npm scripts in package.json
{
  "scripts": {
    "test": "playwright test",
    "test:list": "playwright test --list",
    "test:headed": "playwright test --headed",
    "test:report": "playwright show-report"
  }
}
We can run in terminal as below
```bash
npm run test:list
npm test
npm run test:headed
npm run test:report
  ```

  npx tsc --noEmit

  #Execution on local system and browser stack from local system
  ```bash
$env:EXECUTION_MODE="browserstack"         
$env:TEST_ENV="qa"
npx browserstack-node-sdk playwright test

$env:EXECUTION_MODE="local"                     
$env:TEST_ENV="qa"          
 npx playwright test 

```
