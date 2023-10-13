import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect} from '@playwright/test';
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 *2)

let page: Page;

  When('User clicks on add product', async function () {
    await pageFixture.page.locator("(//span[@class='css-1bascr2-euiButtonDisplayContent'])[1]").click();
  });

  When('User enters Name Description and Price', async function () {
    await pageFixture.page.locator('(//*[@class="euiText css-1w6ric5-euiText-m"])[2]').click();
    await pageFixture.page.locator('//*[@data-test-subj="product_Name"]').fill("newproduct");
    await pageFixture.page.locator('//*[@data-test-subj="product_Description"]').fill("newproduct description again and again");
    await pageFixture.page.locator('//*[@data-test-subj="product_Price"]').click();
    await pageFixture.page.locator('//*[@data-test-subj="product_Price"]').fill("5");
  });


  When('User saves changes', async function () {
    await pageFixture.page.waitForTimeout(5000);
    await pageFixture.page.locator("//span[normalize-space()='Save changes']").click();
  });


  Then('a search on the new product will display the product', async function () {
    await pageFixture.page.locator('//*[@placeholder="Search..."]').fill("newproduct");
    await pageFixture.page.locator('(//*[@class="euiSelectableListItem__text euiSelectableListItem__text--truncate"])[1]').click();
    await pageFixture.page.locator('//*[@title="Name: newproduct"]').click();
  });



  When('User deletes the added product', async function () {
    await pageFixture.page.locator('(//*[@class="euiCheckbox__input"])[2]').click();
    await pageFixture.page.locator('(//*[@class="euiFlexItem css-kpsrin-euiFlexItem-growZero"])[33]').click();
    await pageFixture.page.locator('(//*[@class="eui-textTruncate"])[5]').click();
  });


  Then('the product is no longer available', async function () {

    const noItemFound = await pageFixture.page.locator("//span[normalize-space()='No items found']")
    await expect(noItemFound).toBeVisible();
    
  });