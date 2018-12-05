# Puppeteer Jest UI Testing boilerplate

Project to study and play with google-chrome-puppeteer framework and jest to write UI automated test cases

## How to run?

In order to run this project, you need to have  `node` installed.
To execute the tests, run following commands:

```sh
npm install && npm test
```


## What this project tests?

This project goes to this link: https://the-internet.herokuapp.com/login and perform following test scenarios:
1. Login with correct credentials
2. Login with incorrect user
3. Login with incorrect password

## How to run in non-headless mode

Go to test file: `login.spec.js` and in `line 10` change from `headless: true` to `headless: false` so the chrome browser pops up when running again.