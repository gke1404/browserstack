import { test, expect } from '@playwright/test';

test('US-04 Auth: Validate login scenarios.', async ({ page }) => {

  // Step 1: Navigate to application
  await page.goto('https://finstack-alpha.vercel.app');

  // Step 2: Enter Email
  await page.fill('#email', 'naveenreddy4411@gmail.com');

  // Step 3: Enter Password
  await page.fill('#password', '12345678');

  // Step 4: Click Sign In
  await page.click('#sign_in');

//   // Step 5: Validate Login Success Text
//   await expect(page.getByText('Let\'s manage your finances with confidence')).toBeVisible();

});


test('US-04 Auth: Negative Scenario - Validate login scenarios.', async ({ page }) => {

  // Step 1: Navigate to application
  await page.goto('https://finstack-alpha.vercel.app');

  // Step 2: Enter Email
  await page.fill('#email', 'naveenreddy4411@gmail.com');

  // Step 3: Enter Password
  await page.fill('#password', '12345678910');

  // Step 4: Click Sign In
  await page.click('#sign_in');

  // Step 5: Validate Login Success Text
  await expect(page.getByText('Let\'s manage your finances with confidence')).toBeVisible();

});
