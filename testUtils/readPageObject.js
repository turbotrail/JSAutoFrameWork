"use strict";
const fs = require('fs')
let readPageObjects = class
{
  constructor(fileName){
    var data = fs.readFileSync('./pageObjects/'+fileName, 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    return JSON.parse(data);
  }
}
module.exports=readPageObjects