export class HomePage {
  constructor(page) {
    this.page = page;
    this.myAccount = 'text=My Account';
    this.register = 'text=Register';
    this.login = 'text=Login';
    this.searchInput = 'input[name="search"]';
    this.searchButton = 'button.btn-default[type="button"]';
    this.laptopsMenu = 'text=Laptops & Notebooks';
    this.showAllLaptops = 'text=Show All Laptops & Notebooks';
    this.cartButton = '#cart button';
    this.viewCart = 'text=View Cart';
  }

  async goto() {
    await this.page.goto('/');
  }

  async goToRegister() {
    await this.page.click(this.myAccount);
    await this.page.click(this.register);
  }

  async goToLogin() {
    await this.page.click(this.myAccount);
    await this.page.click(this.login);
  }

  async search(term) {
    await this.page.fill(this.searchInput, term);
    await this.page.click(this.searchButton);
  }

  async showAllLaptops() {
    await this.page.hover(this.laptopsMenu);
    await this.page.click(this.showAllLaptops);
  }

  async openCart() {
    await this.page.click(this.cartButton);
    await this.page.click(this.viewCart);
  }
}