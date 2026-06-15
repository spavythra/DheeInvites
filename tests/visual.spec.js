// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

const FILE_URL = `file://${path.resolve(__dirname, '../index.html')}`;

test.beforeEach(async ({ page }) => {
  await page.goto(FILE_URL);
  // Wait for card entrance animation to settle
  await page.waitForTimeout(1200);
});

// ── Config injection ─────────────────────────────────────────────────────────

test('config: child name is injected into hero', async ({ page }) => {
  const name = await page.locator('#cfg-name').textContent();
  expect(name?.trim()).toBe('Dhrithi');
});

test('config: age ring shows correct age', async ({ page }) => {
  const age = await page.locator('#cfg-age').textContent();
  expect(age?.trim()).toBe('2');
});

test('config: event date is rendered', async ({ page }) => {
  const date = await page.locator('#cfg-date').textContent();
  expect(date?.trim()).toBe('July 4, 2026');
});

test('config: event time is rendered', async ({ page }) => {
  const time = await page.locator('#cfg-time').textContent();
  expect(time?.trim()).toBe('17:00 – 19:00');
});

test('config: venue contains postcode', async ({ page }) => {
  const venue = await page.locator('#cfg-venue').innerHTML();
  expect(venue).toContain('33580');
});

// ── Language toggle ──────────────────────────────────────────────────────────

test('lang toggle: button is visible on load', async ({ page }) => {
  await expect(page.locator('#langBtn')).toBeVisible();
});

test('lang toggle: default label is FI', async ({ page }) => {
  const label = await page.locator('#langBtn').textContent();
  expect(label).toContain('FI');
});

test('lang toggle: clicking switches html[lang] to en', async ({ page }) => {
  await page.locator('#langBtn').click();
  const lang = await page.locator('html').getAttribute('lang');
  expect(lang).toBe('en');
});

test('lang toggle: clicking again reverts to fi', async ({ page }) => {
  await page.locator('#langBtn').click();
  await page.locator('#langBtn').click();
  const lang = await page.locator('html').getAttribute('lang');
  expect(lang).toBe('fi');
});

test('lang toggle: EN mode hides Finnish label spans', async ({ page }) => {
  await page.locator('#langBtn').click();
  const fiSpan = page.locator('.t-fi').first();
  await expect(fiSpan).toBeHidden();
});

test('lang toggle: FI mode hides English label spans', async ({ page }) => {
  // Default is bilingual; switch to EN then back to FI
  await page.locator('#langBtn').click();
  await page.locator('#langBtn').click();
  const enSpan = page.locator('.t-en').first();
  await expect(enSpan).toBeHidden();
});

// ── Visual regression ────────────────────────────────────────────────────────

test('visual: invite card (page 1) matches snapshot', async ({ page }) => {
  const card = page.locator('#card1');
  await expect(card).toHaveScreenshot('card1.png', { maxDiffPixelRatio: 0.02 });
});

test('visual: event details grid matches snapshot', async ({ page }) => {
  const grid = page.locator('.det-grid');
  await expect(grid).toHaveScreenshot('det-grid.png', { maxDiffPixelRatio: 0.02 });
});

test('visual: language toggle button matches snapshot', async ({ page }) => {
  const btn = page.locator('.lang-pill');
  await expect(btn).toHaveScreenshot('lang-pill.png', { maxDiffPixelRatio: 0.02 });
});

test('visual: full page — mobile viewport', async ({ page }) => {
  await expect(page).toHaveScreenshot('full-mobile.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.02,
  });
});
