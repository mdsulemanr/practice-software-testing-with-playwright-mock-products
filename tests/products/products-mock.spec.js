import { test, expect } from '@playwright/test';
import { mockProducts } from '../../helpers/mockProducts.js';
import { combinationPliers, discountedProduct, expensiveProduct, outOfStockProduct, productsResponse, errorResponse } from '../../test-data/products.js';

test('exactly one product - UI renders single product card', async ({ page }) => {
  await mockProducts(page, productsResponse([combinationPliers]));
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.getByText('Combination Pliers')).toBeVisible();
  expect(await page.locator('.card').count()).toBe(1);
});

test('no products - empty state', async ({ page }) => {
  await mockProducts(page, productsResponse([]));
  await page.goto('https://practicesoftwaretesting.com/');
  expect(await page.locator('.card').count()).toBe(0);
  // Note: The app does not expose a clear empty-state message for no products
});

test('API returns 500 - error state', async ({ page }) => {
  await mockProducts(page, errorResponse('Internal Server Error'), 500);
  await page.goto('https://practicesoftwaretesting.com/');
  expect(await page.locator('.card').count()).toBe(0);
  // Note: The app does not expose a clear error message for API failures
});

test('slow API - loading state', async ({ page }) => {
  await mockProducts(page, productsResponse([combinationPliers]), 200, 2000);
  await page.goto('https://practicesoftwaretesting.com/');
  // Note: The app does not expose a reliable loading indicator/skeleton
  await expect(page.getByText('Combination Pliers')).toBeVisible({ timeout: 5000 });
});

test('product with discount/location offer', async ({ page }) => {
  await mockProducts(page, productsResponse([discountedProduct]));
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.getByText('Discounted Product')).toBeVisible();
  // Note: The app does not expose a visible discount/location offer badge
});

test('very expensive product', async ({ page }) => {
  await mockProducts(page, productsResponse([expensiveProduct]));
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.getByText('Expensive Product')).toBeVisible();
  await expect(page.getByText('$999.99')).toBeVisible();
});

test('out of stock product', async ({ page }) => {
  await mockProducts(page, productsResponse([outOfStockProduct]));
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.getByText('Out of Stock Product')).toBeVisible();
  // Note: The app does not expose a clear out-of-stock/unavailable state indicator
});