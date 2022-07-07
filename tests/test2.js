"use strict";
const reporterClass = require('../testUtils/reporterMethods.js');
var locatorUtilsClass = require('../testUtils/locatorUtils.js');
var readPageObject = require('../testUtils/readPageObject.js');
var readUrl = require('../testUtils/readUrl.js');
const settings= require('../settings.js');
async function test2(driver,By,until) {
    // //Initiating the Driver
    let reporterObject = new reporterClass(driver);
    let locator = await new locatorUtilsClass(driver);
    let webConfig= new readPageObject('../pageObjects/webConfig.json');
    let urls = new readUrl();
    await driver.get(urls.webConfig);
    await driver.manage().window().maximize();
    driver.sleep(2000);
    await locator.getElementByXpath(webConfig.advancedButton,settings.locatorTimeOut);
    var advanced = await driver.findElement(By.xpath(webConfig.advancedButton));
    await advanced.click();
    await locator.getElementByXpath(webConfig.continueLink,settings.locatorTimeOut);
    var continueLink = await driver.findElement(By.xpath(webConfig.continueLink));
    await continueLink.click();
    await locator.getElementByXpath(webConfig.userName,settings.locatorTimeOut);
    reporterObject.reporterStep('Passed','Login page is loaded successfully for webconfig','test2',true)
    var userName = await driver.findElement(By.xpath(webConfig.userName));
    await userName.sendKeys("service");
    await locator.getElementByXpath(webConfig.pasword,settings.locatorTimeOut);
    var password = await driver.findElement(By.xpath(webConfig.pasword));
    let pawd=4552401;
    await password.sendKeys(pawd.toString());
    var login = await driver.findElement(By.xpath(webConfig.login));
    await login.click();
    await locator.getElementByXpath(webConfig.homePage,settings.locatorTimeOut)
    reporterObject.reporterStep('Passed','Home page is loaded after sign in','test2',true)
    return true;
    }

    module.exports={
    test2
    }
