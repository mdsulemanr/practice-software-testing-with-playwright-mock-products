import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/user.json' });

test('should display user profile', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/account');
  await expect(page.getByText('test user')).toBeVisible();
});