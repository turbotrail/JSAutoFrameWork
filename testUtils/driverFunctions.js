'use strict';
var wd = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var chromedriver = require('chromedriver');
const path = require('path');
var settings= require('../settings.js');
let driverClass= class{

    constructor(desiredCaps,browserName,nextPort)
    {
        var options = new chrome.Options();
        options.addArguments(["--no-sandbox",
                       "--remote-debugging-port=" + nextPort])
    if (browserName=='Android')
    {
    this.driver =new wd.Builder().usingServer(desiredCaps.appiumHub).withCapabilities(desiredCaps.android).build();
    }
    else{
        console.log(nextPort);
        // let chrpath = path.join(settings.PROJECT_DIR+'driver/chromedriver.exe');
        //         this.driver  = new wd.Builder().forBrowser(chrpath).withCapabilities(wd.Capabilities.chrome().set('chromeOptions',desiredCaps.chrome.chromeOptions)).setChromeOptions().build();
        var path = require('chromedriver').path;
        this.driver = chrome.Driver.createSession(new chrome.Options(), new 
        chrome.ServiceBuilder(path).build());
            }    
    return this.driver;
}
}

module.exports=driverClass