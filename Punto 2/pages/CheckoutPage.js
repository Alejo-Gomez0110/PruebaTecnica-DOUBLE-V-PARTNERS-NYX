export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.paymentAddressBtn = '#button-payment-address';
    this.shippingAddressBtn = '#button-shipping-address';
    this.shippingMethodBtn = '#button-shipping-method';
    this.paymentMethodBtn = '#button-payment-method';
    this.confirmBtn = '#button-confirm';
    this.termsCheckbox = 'input[name="agree"]';
  }

  async completeCheckout() {
    if (await this.page.locator(this.paymentAddressBtn).count()) {
      await this.page.click(this.paymentAddressBtn);
    }
    if (await this.page.locator(this.shippingAddressBtn).count()) {
      await this.page.click(this.shippingAddressBtn);
    }
    if (await this.page.locator(this.shippingMethodBtn).count()) {
      await this.page.click(this.shippingMethodBtn);
    }
    if (await this.page.locator(this.termsCheckbox).count()) {
      await this.page.check(this.termsCheckbox);
    }
    if (await this.page.locator(this.paymentMethodBtn).count()) {
      await this.page.click(this.paymentMethodBtn);
    }
    if (await this.page.locator(this.confirmBtn).count()) {
      await this.page.click(this.confirmBtn);
    }
    await this.page.waitForSelector('h1');
  }
}