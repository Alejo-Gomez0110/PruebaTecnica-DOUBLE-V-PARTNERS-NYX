export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = 'button#button-cart';
  }

  async openProductByName(name) {
    await this.page.click(`text=${name}`);
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
    await this.page.waitForSelector('.alert-success');
  }
}