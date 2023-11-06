const { test, expect } = require('@playwright/test');

const websiteURL = 'http://24.0.58.91:5500/Home.html';

// Expected constants
const expectedTitle = 'Dinesh Portfolio';

const expectedMenuItemCount = 3;
const expectedHeroTitle = 'Hi I am Dinesh sai Challa';
const expectedHeroSubText = 'Welcome to my portfolio! I m a passionate full stack developer with a strong foundation in web development.';
const expectedHeroLinkCount = 1;
const expectedHeroMetaDescription='Landing Page'
const expectedFeaturedImageCount= 1;


// const expectedFeaturedTitle = 'Featured In:';
// const expectedFeaturedImageCount = 4;
// const expectedAboutTitle = 'Built-In Analytics to Track Your NFTs';
// const expectedBuyTitle = 'Built-In Analytics to Track Your NFTs';
// const expectedTestimonialsTitle = 'Read What Others Have to Say';
// const expectedTestimonialCount = 3;
// const expectedReadyTitle = 'Are you ready?';
// const expectedReadyLinkCount = 1;
// const expectedMetaDescription = 'This is an example NFT website coded from a Figma tutorial';
// const expectedMetaKeywordsNotEmpty = '';
const expectedNavs = ['Home', 'About', 'Services', 'Contact'];
// const expectedAlts = ['Featured in fcompany', 'Featured in forbes', 'Featured in mit', 'Featured in tcrunch'];
// const expectedNames = ['Olivia Cole', 'Evan White', 'Jessica Page'];
const expectedLinks = ['LinkedIn', 'Github'];
// const expectedIcons = ['fas fa-home', 'fas fa-money-bill-wave', 'fas fa-hand-holding-usd', 'fas fa-eye', 'fas fa-envelope', 'fab fa-linkedin', 'fab fa-instagram', 'fab fa-twitter', 'fas fa-store', 'fas fa-phone'];
// const expectedSubmitButtonText = 'Submit';

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});



test('Check Navigation Menu in Header', async ({ page }) => {
  const menuItemCount = await page.locator('nav ul li ').count();
  expect(menuItemCount).toBe(expectedMenuItemCount);
});

test('Check Hero Section', async ({ page }) => {
  expect(await page.locator('.inner header h1').textContent()).toBe(expectedHeroTitle);
  expect(await page.locator('.inner header p').textContent()).toBe(expectedHeroSubText);
});

test('Check Links in Hero Section', async ({ page }) => {
  const linkCount = await page.locator('footer').count();
  expect(linkCount).toBe(expectedHeroLinkCount);
});





test('Check Project Meta Description', async ({ page }) => {
  const metaDescription = await page.getAttribute('meta[name="description"]','content');
  expect(metaDescription).toBe(expectedHeroMetaDescription);
});







// test('Check img in Hero Section', async ({ page }) => {
//     const imgCount = await page.locator('img').count();
//     expect(imgCount).toBe(expectedFeaturedImageCount);
//   });