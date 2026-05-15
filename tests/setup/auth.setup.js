import 'dotenv/config';
import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByTestId('email').fill(process.env.LOGIN_EMAIL);
  await page.getByTestId('password').fill(process.env.LOGIN_PASSWORD);
  await page.getByTestId('login-submit').click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});