import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import {chromium, Page, Browser, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import { text } from 'stream/consumers';

setDefaultTimeout(60 * 1000 *2)


let browser: Browser;
let page: Page;

  Given('User navigates to the Nexudus Application', async function () {
    
    await pageFixture.page.goto('https://dashboard.nexudus.com/qa/billing/products');
  });

  Given('User enters the username as {string}', async function (username) {
    
    await pageFixture.page.locator('//*[@name="Email"]').fill(username);
  });

  Given('User enters the password as {string}', async function (password) {
    await pageFixture.page.locator('//*[@name="Password"]').fill(password);
  });

  When('user clicks on the login button', async function () {
    await pageFixture.page.locator('//*[@class="eui-textTruncate"]').click();
  });

  Then('Login should be successful', async function () {
    const text = await pageFixture.page.locator('//*[@aria-label="Adrian Palacios"]');
    console.log("Username: " + text);
   
  });  

  Then('Login should not be successful', async function () {
   const failuremessage = await pageFixture.page.locator(".euiText.css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description")
   await expect(failuremessage).toBeVisible();
  });

  Then('User logs out', async function () {
    await pageFixture.page.locator('//*[@aria-label="Adrian Palacios"]').click();
    await pageFixture.page.locator("(//span[normalize-space()='Log out'])[1]").click();
  });
