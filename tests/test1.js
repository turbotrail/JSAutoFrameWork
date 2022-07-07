"use strict";
const reporterClass = require('../testUtils/reporterMethods.js');
var locatorUtilsClass = require('../testUtils/locatorUtils.js');
var readPageObject = require('../testUtils/readPageObject.js');
const settings= require('../settings.js');
async function test1(driver,By,until) {
    // //Initiating the Driver
    let reporterObject = new reporterClass(driver);
    let locator = await new locatorUtilsClass(driver);
    let freelanceHomePage= new readPageObject('../pageObjects/freelancerHome.json');
    await driver.get("https://www.freelancer.com/");
    await driver.manage().window().maximize();
    locator.getElementByXpath(freelanceHomePage.freelanceHome);
    reporterObject.reporterStep('Passed','Home page is loaded successfully','test1',true)
    locator.getElementByXpath(freelanceHomePage.earnMoneyButton,settings.locatorTimeOut)
    var earnMoneyButton = await driver.findElement(By.xpath(freelanceHomePage.earnMoneyButton));
    await earnMoneyButton.click();
    locator.getElementByXpath(freelanceHomePage.freelanceSignUp,settings.locatorTimeOut)
    reporterObject.reporterStep('Passed','Sign up page is loaded','test1',true)
    return true;
    }

    module.exports={
    test1
    }
