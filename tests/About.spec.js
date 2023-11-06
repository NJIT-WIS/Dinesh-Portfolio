const { test, expect } = require('@playwright/test');

const websiteURL = 'http://24.0.58.91:5500/Aboutme.html';

const expectedAboutTitle='About Me';

const expectedMenuItemCountProjects = 3;

const expectedskilltProjects=1;


const expectedExperienceProjects=1;
const expectedEducationProjects=1



test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
  });


  test('Check About Page Title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe(expectedAboutTitle);
  });


  test('Check Navigation Bar in About Page', async ({ page }) => {
    const menuItemCountAbout = await page.locator('nav ul li a').count();
    expect(menuItemCountAbout).toBe(expectedMenuItemCountProjects);
  });


  test('Check NavBar has <a> tag in the About Page', async ({ page }) => {

    const aTagExists = await page.locator('nav a').count() > 0;
  
    
    await expect(aTagExists).toBe(true);
  });



  test('Check About Section', async ({ page }) => {
    const aboutSectionExists = await page.locator('#about').isVisible();
    await expect(aboutSectionExists).toBe(true);
  });
  

  test('Check About Section has <p> tag in the About Page', async ({ page }) => {

    const PTagExists = await page.locator('#about p').count() > 0;
  
    
    await expect(PTagExists).toBe(true);
  });

  test('Check skills in About Page', async ({ page }) => {
    const Skillabout= await page.locator('#skills').count();
    expect(Skillabout).toBe(expectedskilltProjects);
  });

  test('Check experience in About Page', async ({ page }) => {
    const experienceabout= await page.locator('#experience').count();
    expect(experienceabout).toBe( expectedExperienceProjects);
  });

  test('Check education in About Page', async ({ page }) => {
    const educationabout= await page.locator('#experience').count();
    expect(educationabout).toBe( expectedEducationProjects);
  });