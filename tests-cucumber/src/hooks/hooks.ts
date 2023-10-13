import {AfterAll, Before, BeforeAll} from "@cucumber/cucumber"
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;
let context: BrowserContext; 

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext({recordVideo: {dir: 'testresults/'}})
    page = await context.newPage();
    pageFixture.page = page;
}) 


AfterAll(async function () {
    await pageFixture.page.close();
    await browser.close();    
})