const { readBrowserProp } = require('../testUtils/readTestProperties.js');
var assert = require('assert');
const settings= require('../settings.js');
var driverClass = require('../testUtils/driverFunctions.js');
var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
var nextPort=3000;
const {test2} = require('../tests/test2.js');
describe("Test Suite2", function(){

    jest.setTimeout(90 * 1000)
    beforeAll(() => jest.setTimeout(90 * 1000))
    beforeEach(async function(){

    });

    it("Test-2",async ()=>{
        try {
            let desiredCaps = readBrowserProp();
           var driver2= await new driverClass(desiredCaps,'chrome',nextPort++);
           await test2(driver2,By, until);
           var session = await driver2.getSession();
        console.log(session.id_);
        // setTimeout(() => {
        //     driver2.quit();
        // }, 1000);
        // 
        }
        catch(err){
            console.log(err)
        }
        finally{
            await driver2.close();
        }
    });
    afterEach(async ()=>{

    });
});
