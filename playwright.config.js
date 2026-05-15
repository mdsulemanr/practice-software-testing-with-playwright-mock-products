import { devices } from '@playwright/test';

const config = {
  testDir: 'tests',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
  use: { 
    testIdAttribute: 'data-test'
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/setup/*.setup.js',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], headless: false, trace: 'on' },
      dependencies: ['setup'],
    },
  ],

  reporter: [['html']],
  workers: 1,
  fullyParallel: false,
  video: 'on',
  screenshot: 'on',
};

export default config;