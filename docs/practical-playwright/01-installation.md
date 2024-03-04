---
title: Installing
author: Wei
date: '2021-12-12'
---

## Installing Playwright

Create a new directory for the testing project.

```shell
mkdir test-project
cd test-project
```

In the test directory, install Playwright packages.

```shell
npm init playwright@latest
```

As we are going to use Javascript, change the default answer of the question `Do you want to use TypeScript or JavaScript?` to Javascript. Also we will install browsers and dependencies, so answer `Yes` when these questions are asked for input. We do not need CI yet, so answer "No" for the Github Action question.

> Do you want to use TypeScript or JavaScript? · JavaScript
>
> Add a GitHub Actions workflow? (y/N) · false
>
> Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
>
> Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo npx playwright install-deps')? (y/N) · true

After these steps, a barebone test project is generated with some runnable example test cases.

```text
test-project
|--playwright.config.js
|--tests
|    |--example.spec.js
|--tests-examples
     |--demo-todo-app.spec.js
```

It generates the default configuation file `playwright.config.js`. Test case template is in the test directory selected when answering the installation questions. The default is `tests`. The directory `tests-examples` holds some test cases for a demo TODO app provided by Playwright.

## Run the example test case

As mentioned above, the installation generates some runnable test cases. They can be run by the following command.

```shell
# Run tests
npx playwright test

# Check test report
npx playwright show-report
```

By default, the test directory is `tests` which contains only one file with two test cases checking text on Playwright home page. The test runs in 3 browsers in headless mode. If we want to limit it to only Chrome and see what is running, we can change `playwright.config.js` by removing the other browsers and add the option to run in headed mode.

```javascript
  // ...

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // runs in headed mode
        headless: false,
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ]

  // ...
```

Alternatively, we can keep the configuration in headless mode for running in CI, but call the command with explicit parameter to run in headed mode.

```shell
npx playwright test --headed
```

Changing the option `testDir` to a different one will run tests in the specified directory. If we want to run the test cases generated for the TODO app, we can change the directoty to `tests-examples`

```javascript
// ...

module.exports = defineConfig({
  testDir: './tests-examples',
  // ...
})
```

Now run the same command above, it will start test cases for the example TODO app.
