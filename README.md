# Shabi Cypress CLI

A CLI to make your life easier.
Following Cypress structure standards and the following naming convention.

```
    cypress/
        fixtures/
        helpers/
            /Login.js
            /Register.js
            /ForgotPassword.js -- (a helper class)

        integration/
            /TC001_Login.js
            /TC002_Register.js
            /TC003_ForgotPassword.js -- (a test case)

        plugins/
        support/

        config.js

    package.json
    cypress.json
```

## Installation

Using [npm](https://www.npmjs.com/):

    npm i -g shabi-cy

## CLI Arguments

-   First Argument - `shabi-cy` - [default]
-   Second Argument - `new` | `run` | `run-test` | `open-test` - Action you're trying to execute!
-   Third Argument - `7` | `2` | `1-Hello` - Number (or Number-Name) of the test!
-   Fourth Argument - `--extra` | `-E` - Add Extras to the content you're generating! (not implemented yet)

## Options

```javascript
shabi-cy new 7-Login
shabi-cy new 8-Register --extra
shabi-cy run
shabi-cy run-test 7
shabi-cy open-test 14
shabi-cy delete-test 12
shabi-cy delete-tests
shabi-cy update-reports
```

| Commands       |                                                      Functionality                                                       |
| -------------- | :----------------------------------------------------------------------------------------------------------------------: |
| new            |                                                      Create a test                                                       |
| run            |                                                      Run all tests                                                       |
| run-test       |                                               Run a Specified Test (ex. 1)                                               |
| open-test      |                                          Run a Specified Test on Screen (ex. 7)                                          |
| delete-test    |                                                  Delete a Test (ex. 5)                                                   |
| delete-tests   |                           Delete Multiple Tests (after running the command, answer which ones)                           |
| update-reports | The naming of the saved reports is unreadable, so this converts the reports to the test names (also folder names aswell) |
