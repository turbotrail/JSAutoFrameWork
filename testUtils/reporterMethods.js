
let reporterClass = class
{
    constructor(driver)
    {
        // var { allure } = require('allure-mocha/runtime');
       
        // this.allure = allure;
        this.driver=driver;
    }

    async reporterStep(status,message,testCaseID,screenshotFlag)
    {
        console.log(message+' - '+ status)
        var saveScreenShotClass = require('../testUtils/saveScreenShot.js');
        if (screenshotFlag)
        {
        // allure.logStep(message,status);
        let imgObj= new saveScreenShotClass(this.driver,'/screenShotsAndLogs/'+testCaseID);
        await imgObj.testScreenShot();
        // await allure.createAttachment('screenshot',new Buffer(imgObj, 'base64'), 'image/png')
        }
    }
}


module.exports=reporterClass;