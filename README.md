# Shabi Cypress CLI

## CLI Arguments

-   First Argument - `shabi-cy` - [default]
-   Second Argument - `new` | `run` | `run-file` - Action you're trying to execute!
-   Third Argument - `7` | `2` | `1-Hello` - Number (or Number-Name) of the test!
-   Fourth Argument - `--extra` | `-E` - Add Extras to the content you're generating! (not implemented yet)

## Options

```javascript
shabi new 7-Login
shabi new 8-Register --extra
shabi run
shabi run-test 7
shabi open-test 14
```

| Commands  |             Functionality              |
| --------- | :------------------------------------: |
| new       |             Create a test              |
| run       |             Run all tests              |
| run-test  |      Run a Specified Test (ex. 1)      |
| open-test | Run a Specified Test on Screen (ex. 7) |
