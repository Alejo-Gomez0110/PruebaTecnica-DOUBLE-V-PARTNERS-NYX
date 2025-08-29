export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = 'input[name="firstname"]';
    this.lastName = 'input[name="lastname"]';
    this.email = 'input[name="email"]';
    this.telephone = 'input[name="telephone"]';
    this.password = 'input[name="password"]';
    this.confirm = 'input[name="confirm"]';
    this.agree = 'input[name="agree"]';
    this.continueButton = 'input[value="Continue"]';
  }

  async register({ firstName, lastName, email, telephone = '123456789', password }) {
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.email, email);
    await this.page.fill(this.telephone, telephone);
    await this.page.fill(this.password, password);
    await this.page.fill(this.confirm, password);
    await this.page.check(this.agree);
    await this.page.click(this.continueButton);
  }
}