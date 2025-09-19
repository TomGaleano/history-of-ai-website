import { test, expect } from '@playwright/test';

test('ELIZA chatbot interaction', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click on the 1960s tab
  await page.click('text=The 1960s');

  // Check if the "Talk to ELIZA" section is visible
  await expect(page.locator('h3:has-text("Talk to ELIZA")')).toBeVisible();

  // Type a message and send it
  await page.fill('[placeholder="Type your message..."]', 'I am feeling happy');
  await page.click('button:has-text("Send")');

  // Check if the user's message and ELIZA's response are in the chat
  await expect(page.locator('text=User: I am feeling happy')).toBeVisible();
  await expect(page.locator('text=/ELIZA: .*/')).toBeVisible();
});
