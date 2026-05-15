export const mockProducts = async (page, responseBody, status = 200, delayMs = 0) => {
  await page.route('**/products**', async route => {
    if (delayMs > 0) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
    await route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify(responseBody),
    });
  });
};