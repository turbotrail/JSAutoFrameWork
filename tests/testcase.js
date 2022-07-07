"use strict";
const reporterClass = require('../testUtils/reporterMethods.js');
var locatorUtilsClass = require('../testUtils/locatorUtils.js');
var readPageObject = require('../testUtils/readPageObject.js');
const settings = require('../settings.js');
async function testcase(driver,By,until) {
    // //Initiating the Driver
    let reporterObject = new reporterClass(driver);	
    let locator = await new locatorUtilsClass(driver);
    let msaObjects= new readPageObject('../pageObjects/msaApp.json');
    await driver.wait(until.elementLocated(By.id(msaObjects.passCodeDialog), settings.locatorTimeOut));
    var passCode = By.id(msaObjects.passCodeDialog);
    const passCodeEnter = await driver.findElement(passCode);
    await passCodeEnter.sendKeys("");
    await reporterObject.reporterStep('Passed','Application launched successfully','testcase',true)
    var deviceConfig =await locator.clickElementByXpath(msaObjects.configDevice);
    await reporterObject.reporterStep('Passed','Device config clicked','testcase',true)
    var createProfile= await locator.clickElementById(msaObjects.createProfile)
    await reporterObject.reporterStep('Passed','Profile creation section opened','testcase',true)
    await locator.clickElementById(msaObjects.deviceType)
    await reporterObject.reporterStep('Passed','Profile creation section opened','testcase',true)
   await locator.clickElementByXpath(msaObjects.deviceSelect);
   await locator.clickElementById(msaObjects.okButton)
    //await driver.quit();
    return true;
    }

    module.exports={
    testcase
    }
