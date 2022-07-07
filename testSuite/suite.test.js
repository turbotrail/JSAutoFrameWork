const { readBrowserProp } = require('../testUtils/readTestProperties.js');
var assert = require('assert');
const settings= require('../settings.js');
var driverClass = require('../testUtils/driverFunctions.js');
var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
var nextPort=3000;
const {test1} = require('../tests/test1.js');
describe("Test Suite1", function(){

    jest.setTimeout(90 * 1000)
    beforeAll(() => jest.setTimeout(90 * 1000))
    beforeEach(async function(){

    });

    test.concurrent("Test-1",async ()=>{
        try {
            let desiredCaps = readBrowserProp();
            var driver1= await new driverClass(desiredCaps,'chrome',nextPort++);
    await test1(driver1,By, until);
    var session = await driver1.getSession();
        console.log(session.id_)
        }
        catch(err){
            console.log(err)
        }
        finally{
            await driver1.quit();
        }
    });
    afterEach(async ()=>{

    });
});
