# Shabi Cypress CLI

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm i -g shabi-cy

## CLI Arguments

-   First Argument - `shabi-cy` - [default]
-   Second Argument - `new` | `run` | `run-file` - Action you're trying to execute!
-   Third Argument - `7` | `2` | `1-Hello` - Number (or Number-Name) of the test!
-   Fourth Argument - `--extra` | `-E` - Add Extras to the content you're generating! (not implemented yet)

## Options

```javascript
shabi-cy new 7-Login
shabi-cy new 8-Register --extra
shabi-cy run
shabi-cy run-test 7
shabi-cy open-test 14
shabi-cy update-reports
```

| Commands       |                                                      Functionality                                                       |
| -------------- | :----------------------------------------------------------------------------------------------------------------------: |
| new            |                                                      Create a test                                                       |
| run            |                                                      Run all tests                                                       |
| run-test       |                                               Run a Specified Test (ex. 1)                                               |
| open-test      |                                          Run a Specified Test on Screen (ex. 7)                                          |
| update-reports | The naming of the saved reports is unreadable, so this converts the reports to the test names (also folder names aswell) |
