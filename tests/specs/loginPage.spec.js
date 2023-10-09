import { PAGES } from "../constants/pages";
import { test, expect } from '@playwright/test';

const title = "Instagram";

test('get started link', async ({ page }) => {
    await page.goto(PAGES.home);
    await expect(page).toHaveTitle(title);
  
    // Click the get started link.
    // await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });