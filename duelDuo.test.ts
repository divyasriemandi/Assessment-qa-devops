
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
}),

test('click Draw and validate if choices are shown', async () => {
    // await driver.findElement(By.id('draw')).sendKeys('\n');
    await driver.findElement(By.id('draw')).click();
     await sleep(1000);
     let result = await driver.findElement(By.xpath("//*[@id='choices']")).getText();
    console.log(result);
   expect(result).not.toBeNull();
   
})

test('click add to duo and see if its adds to the player duo', async () => {
    // await driver.findElement(By.id('draw')).sendKeys('\n');
    await driver.findElement(By.id('draw')).click();
     await sleep(1000);
     await driver.findElement(By.className('bot-btn')).click();
     await sleep(1000);
     let result = await driver.findElement(By.xpath("//*[@id='player-duo']")).getText();
    console.log(result);
   expect(result).not.toBeNull();
   
})