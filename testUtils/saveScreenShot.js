"use strict;"
const path = require('path');
var fs = require('fs');
var settings= require('../settings.js');
let saveScreenShotClass = class 
{
    constructor(driver,pth)
    {
        this.pth=pth;
        this.driver=driver;
    }
async testScreenShot()
{
    var name = Math.random().toString(36).slice(2)
    let ssOut = path.join(settings.PROJECT_DIR+this.pth+'/',name+'.jpg');
    if (!fs.existsSync(settings.PROJECT_DIR+this.pth)){
        fs.mkdirSync(settings.PROJECT_DIR+this.pth);
    }
    await this.driver.takeScreenshot().then(
        function(image) {
            require('fs').writeFileSync(ssOut, image, 'base64');
        }
    );
}
}

module.exports=saveScreenShotClass;