import { test, expect } from '@playwright/test';

test('snapshot', async ({ page }) => {
	await page.goto('/');
	expect(await page.screenshot()).toMatchSnapshot();
});
