import { test, expect } from '@playwright/test';

test('RCA demo: Login CTA stays unchanged after toggle', async ({ page }) => {
  await page.goto('https://finstack-alpha.vercel.app/login');

  await expect(page.getByText('Self Heal / Percy Toggle Disabled')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

  await page.getByRole('button', { name: 'Enable' }).click();

  await expect(page.getByText('Self Heal / Percy Toggle Enabled')).toBeVisible();

  // Intentional failure for BrowserStack's Test Failure Analysis agent.
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});
