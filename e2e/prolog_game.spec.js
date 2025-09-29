import { test, expect } from '@playwright/test';

test('Prolog game', async ({ page }) => {
  await page.goto('/');

  // Click on the 1970s decade
  await page.click('text=The 1970s');

  // Check that the Prolog game is visible
  await expect(page.locator('[data-testid="prolog-game"]')).toBeVisible();

  // Enter a query to look around
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'look(office).');
  await page.click('text=Submit');

  // Check the output
  await expect(page.locator('textarea')).toHaveValue('[desk, safe]');

  // Examine the desk
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'examine(desk).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('A messy desk with a locked drawer.');

  // Try to get the combination part from the desk
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'combination_part(desk, X).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue("{X: 1}");

  // Go to the library
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'goto(library).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('You are now in the library.');

  // Look around in the library
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'look(library).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('[book]');

  // Examine the book
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'examine(book).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue("A book titled 'The History of Logic Programming'. A small piece of paper is sticking out of it.");

  // Get the combination part from the book
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'combination_part(book, X).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue("{X: 7}");

  // Go to the gallery
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'goto(gallery).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('You are now in the gallery.');

  // Look around in the gallery
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'look(gallery).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('[painting]');

  // Examine the painting
  await page.fill('[placeholder="Enter youropolishr Prolog query here..."]', 'examine(painting).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('A beautiful painting of a landscape. There is a small inscription at the bottom.');

  // Get the combination part from the painting
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'combination_part(painting, X).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue("{X: 3}");

  // Go back to the office
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'goto(office).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('You are now in the office.');

  // Try to open the safe with the wrong combination
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'open_safe(1, 2, 3).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('false.');

  // Try to open the safe with the correct combination
  await page.fill('[placeholder="Enter your Prolog query here..."]', 'open_safe(7, 3, 1).');
  await page.click('text=Submit');
  await expect(page.locator('textarea')).toHaveValue('Congratulations! You have opened the safe and found the artifact!');
});
