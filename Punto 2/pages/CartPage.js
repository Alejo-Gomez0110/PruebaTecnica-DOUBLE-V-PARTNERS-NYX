export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutLink = 'text=Checkout';
  }

  async removeProductByName(name) {
    const row = this.page.locator(`#content table tr:has-text("${name}")`);
    const removeBtn = row.locator('button[data-original-title="Remove"]');
    await removeBtn.click();
    await this.page.waitForTimeout(500);
  }

  async updateQuantityForProduct(name, quantity) {
    const row = this.page.locator(`#content table tr:has-text("${name}")`);
    const qtyInput = row.locator('input[type="text"][name*="quantity"]');
    await qtyInput.fill(String(quantity));
    const updateBtn = row.locator('button[data-original-title="Update"]');
    await updateBtn.click();
    await this.page.waitForTimeout(500);
  }

  async goToCheckout() {
    await this.page.click(this.checkoutLink);
  }
}