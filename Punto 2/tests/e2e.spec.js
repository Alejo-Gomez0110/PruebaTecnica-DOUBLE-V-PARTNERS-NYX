import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { RegisterPage } from '../pages/RegisterPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { uniqueEmail } from '../utils/helpers.js';

test('E2E flow: register -> login -> password reset -> add/remove products -> checkout', async ({ page }) => {
  const home = new HomePage(page);
  const register = new RegisterPage(page);
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  const email = uniqueEmail('alejandro');
  const password = 'Password123!';

  await home.goto();
  await home.goToRegister();
  await register.register({ firstName: 'Alejandro', lastName: 'Sanabria', email, password });
  await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');

  await page.click('text=My Account');
  await page.click('text=Logout');
  await expect(page.locator('h1')).toContainText('Account Logout');

  await home.goToLogin();
  await login.login(email, password);
  await expect(page.locator('h2')).toContainText('My Account');

  await home.goToLogin();
  await login.goToForgotten();
  await page.fill('input[name="email"]', email);
  await page.click('input[value="Continue"]');
  await expect(page.locator('.alert-success')).toContainText('An email with a confirmation link has been sent');

  await home.showAllLaptops();
  await expect(page).toHaveURL(/.*route=product\/category.*/);

  await product.openProductByName('MacBook Pro');
  await product.addToCart();
  await expect(page.locator('.alert-success')).toContainText('Success');

  await home.goto();
  await home.search('Samsung Galaxy Tab');
  await product.openProductByName('Samsung Galaxy Tab 10.1');
  await product.addToCart();
  await expect(page.locator('.alert-success')).toContainText('Success');

  await home.openCart();
  await cart.removeProductByName('MacBook Pro');
  await expect(page.locator('#content')).not.toContainText('MacBook Pro');

  await cart.updateQuantityForProduct('Samsung Galaxy Tab 10.1', 2);

  await cart.goToCheckout();
  await checkout.completeCheckout();
  await expect(page.locator('h1')).toContainText('Your order has been placed!');
});