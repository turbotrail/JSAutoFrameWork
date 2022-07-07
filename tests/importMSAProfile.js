"use strict";
const reporterClass = require('../testUtils/reporterMethods.js');
var locatorUtilsClass = require('../testUtils/locatorUtils.js');
var readPageObject = require('../testUtils/readPageObject.js');
const settings = require('../settings.js');
async function importMSAProfile(driver,By,until) {
    // //Initiating the Driver
    let reporterObject = new reporterClass(driver);	
    let locator = await new locatorUtilsClass(driver);
    let xxxObjects= new readPageObject('../pageObjects/xxxApp.json');
    await driver.wait(until.elementLocated(By.id(xxxObjects.passCodeDialog), settings.locatorTimeOut));
    var passCode = By.id(xxxObjects.passCodeDialog);
    const passCodeEnter = await driver.findElement(passCode);
    await passCodeEnter.sendKeys("xxxx");
    await reporterObject.reporterStep('Passed','Application launched successfully','testcase',true)
    var deviceConfig =await locator.clickElementByXpath(xxxObjects.configDevice);
    await reporterObject.reporterStep('Passed','Device config clicked','testcase',true)
    var createProfile= await locator.clickElementById(xxxObjects.createProfile)
    await reporterObject.reporterStep('Passed','Profile creation section opened','testcase',true)
    await locator.clickElementById(xxxObjects.deviceType)
    await reporterObject.reporterStep('Passed','Profile creation section opened','testcase',true)
   await locator.clickElementByXpath(xxxObjects.deviceSelect);
   await locator.clickElementById(xxxObjects.okButton)
    //await driver.quit();
    return true;
    }

    module.exports={
        importMSAProfile
    }
