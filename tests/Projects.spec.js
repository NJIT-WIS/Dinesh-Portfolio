const { test, expect } = require('@playwright/test');


const websiteURL = 'https://njit-wis.github.io/midterm-portfolio-dsk1513/Projects.html';


const expectedProjectTitle='Dinesh Challa Projects';

const expectedProjectMetaDescription="Dinesh Projects- Google clone, React SPD, ProjectFarm, LeaveManager";


const expectedMenuItemCountProjects = 3;

const expectedCardCount=4;





// const expectedLogoTextProj = 'Portfolio';



test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
  });

test('Check Project Page Title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe(expectedProjectTitle);
  });

  test('Check Project Meta Description', async ({ page }) => {
    const metaDescription = await page.getAttribute('meta[name="description"]','content');
    expect(metaDescription).toBe(expectedProjectMetaDescription);
  });

//   test('Check Logo in nav project-section', async ({ page }) => {
//     const logoTextProj = await page.locator(' .portfolio').textContent();
//     expect(logoTextProj).toBe(expectedLogoTextProj);
//   });

  test('Check Navigation Bar in Projects', async ({ page }) => {
    const menuItemCountProj = await page.locator('nav ul li ').count();
    expect(menuItemCountProj).toBe(expectedMenuItemCountProjects);
  });


  test('Check Project Card Section', async ({ page }) => {

    const cardsCount= await page.locator('.card').count();
    
    expect(cardsCount).toBe(expectedCardCount)
  });



  test('Check Project Card has <H1> tag in the Heading', async ({ page }) => {

    const H1TagExists = await page.locator('.card h1').count() > 0;
  
    
    await expect(H1TagExists).toBe(true);
  });

test('Check Project Card has <p> tag in the description', async ({ page }) => {

  const pTagExists = await page.locator('.card p').count() > 0;

  
  await expect(pTagExists).toBe(true);
});

test('Check Project Card has <a> tag in the description', async ({ page }) => {

  const aTagExists = await page.locator('.card a').count() > 0;

  
  await expect(aTagExists).toBe(true);
});