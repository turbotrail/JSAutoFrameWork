"use strict";
const fs = require('fs')

let readBrowserProp = function()
{
var data = fs.readFileSync('./properties/webBrowser.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
  return JSON.parse(data);
}

module.exports={
    readBrowserProp
}