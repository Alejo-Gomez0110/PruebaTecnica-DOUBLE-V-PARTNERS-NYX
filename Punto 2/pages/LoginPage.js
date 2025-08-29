export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = 'input[name="email"]';
    this.password = 'input[name="password"]';
    this.loginButton = 'input[value="Login"]';
    this.forgotten = 'text=Forgotten Password';
  }

  async login(email, password) {
    await this.page.fill(this.email, email);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }

  async goToForgotten() {
    await this.page.click(this.forgotten);
  }
}