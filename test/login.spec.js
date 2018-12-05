import puppeteer from "puppeteer";
import LoginPage from "./../src/pages/login.page";

let page, browser, loginPage;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  loginPage = new LoginPage(page);
});

afterAll(() => {
  browser.close();
});

describe("Authentication", () => {

  describe("Correct credentials", () => {

    test("Login with correct credentials", async () => {
      await loginPage.open(page);
      await loginPage.loginAs('tomsmith', 'SuperSecretPassword!');
  
      let loggedInText = await loginPage.getMessage();
      expect(loggedInText).toBe("You logged into a secure area")
    }, 16000);
  });


  describe("Incorrect Credentials", () => {
    test("Login with incorrect USERNAME", async () => {
      await loginPage.open(page);
      await loginPage.loginAs('tomsmit', 'SuperSecretPassword!')
  
      let invalidUsername = await loginPage.getMessage();
      expect(invalidUsername).toBe("Your username is invalid")
    }, 16000);

    test("Login with incorrect PASSWORD", async () => {
      await loginPage.open(page);
      await loginPage.loginAs('tomsmith', 'incorrect!')
  
      let invalidPassword = await loginPage.getMessage();
      expect(invalidPassword).toBe("Your password is invalid")
    }, 16000);
    
  });

});