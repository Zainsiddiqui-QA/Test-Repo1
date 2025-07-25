import {test} from "@playwright/test"
//import { webkit, chromium, firefox} from "@playwright/test"

test("practice with playwright", async({page})=>{
    //const Browser:Browser = await 


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='password']").fill("admin123");
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='submit']").click();



})