const utils = require('./../utils');

class LoginPage {


  constructor(page) {
    this.page = page;
    this.url = "https://the-internet.herokuapp.com/login"

    /**
     * Selectors
     */
    this.selectors = {
      username: "#username",
      password: "#password",
      loginButton: "button[type='submit']",
      content: "#content",
      flashMessage: "#flash"
    }
  }

  async open() {
    await this.page.goto(this.url);
  }

  async loginAs (user, password) {
    await this.page.waitForSelector(this.selectors.content);

    await this.page.click(this.selectors.username);
    await this.page.type(this.selectors.username, user);
    await this.page.click(this.selectors.password);
    await this.page.type(this.selectors.password, password);

    await this.page.click(this.selectors.loginButton);
  }

  async getMessage () {
    await this.page.waitForSelector(this.selectors.flashMessage);
    let message = await this.page.$eval(this.selectors.flashMessage, el => el.innerText.trim());
    return utils.removeSpecialChars(message);
  }

}

export default LoginPage

