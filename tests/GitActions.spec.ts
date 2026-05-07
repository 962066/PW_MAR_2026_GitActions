import {test} from '@playwright/test';

test('Create Lead',async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('#password').fill("TestLeaf@2025");
    await page.locator('#Login').click();
    await page.locator('.slds-icon-waffle').click();
    await page.locator('//button[@class="slds-button"]').click();
    await page.locator('//p[text()="Sales"]').click();
    await page.locator('//a[@title="Leads"]').click();
    await page.locator('//div[@title="New"]').click();
    await page.locator('//button[@name="salutation"]').click();
    await page.locator('//span[text()="Mr."]').click();
    await page.locator('//input[@name="lastName"]').fill("KM");
    await page.locator('//input[@name="Company"]').fill("TestLeaf");
    await page.locator('//button[@name="SaveEdit"]').click();
    const LeadName=page.locator('//span[text()="Mr. KM"]');
    console.log(LeadName);
    
})