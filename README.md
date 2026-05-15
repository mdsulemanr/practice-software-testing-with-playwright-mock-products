# Practice Software Testing With Playwright Mock Products

Playwright end-to-end automation project for [Practice Software Testing](https://practicesoftwaretesting.com/). The suite focuses on product-list scenarios and uses route mocking to test the UI against controlled product API responses.

## What This Project Covers

- Product listing tests with mocked API responses.
- Edge cases for empty product lists, API errors, slow responses, expensive products, discounted products, and out-of-stock products.
- Login setup using Playwright project dependencies and saved browser storage state.
- HTML reports, screenshots, videos, and traces through Playwright configuration.

## Tech Stack

- Node.js
- Playwright Test
- JavaScript ES modules
- dotenv for environment variables

## Project Structure

```text
.
├── helpers/
│   └── mockProducts.js
├── test-data/
│   └── products.js
├── tests/
│   ├── auth/
│   ├── products/
│   ├── setup/
│   ├── mock-test.spec.js
│   └── test-1.spec.ts
├── playwright.config.js
├── package.json
└── .env.example
```

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Update `.env` with valid credentials:

```env
BASE_URL=https://practicesoftwaretesting.com
LOGIN_EMAIL=your-email@example.com
LOGIN_PASSWORD=your-password
```

The `.env` file is ignored by Git and should not be committed.

## Running Tests

Run the full Playwright suite:

```bash
npx playwright test
```

Run only Chromium tests:

```bash
npx playwright test --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/products/products-mock.spec.js
```

Open the latest HTML report:

```bash
npx playwright show-report
```

## Notes

- The `setup` project logs in first and writes authenticated storage to `playwright/.auth/user.json`.
- Generated authentication state, test results, reports, videos, screenshots, and local environment files are ignored by Git.
- The Chromium project currently runs headed with trace, screenshot, and video enabled in `playwright.config.js`.

## Repository

Remote repository:

```text
https://github.com/mdsulemanr/practice-software-testing-with-playwright-mock-products.git
```
