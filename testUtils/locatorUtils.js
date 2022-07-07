var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
const settings = require('../settings.js');
let locatorUtilsClass= class
{
    constructor(driver){
        this.driver=driver;
    }
async getElementByXpath (xpath, timeout){
  var byElement= By.xpath(xpath);
  await this.driver.wait(until.elementLocated(byElement), timeout);
  return await this.driver.findElement(byElement);
};
async clickElementById(id)
{
    var byElement= By.id(id);
    this.driver.wait(until.elementLocated(byElement, settings.locatorTimeOut));
    var element= await this.driver.findElement(byElement);
    await element.click();
    return element;
}
async clickElementByXpath(xpath)
{
    var byElement= By.xpath(xpath);
    await this.driver.wait(until.elementLocated(byElement, settings.locatorTimeOut));
    var element= await this.driver.findElement(byElement);
    await element.click();
    return element;
}
}

module.exports=locatorUtilsClass;