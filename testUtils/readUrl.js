"use strict";
const fs = require('fs')
let readUrl = class
{
  constructor(){
    var data = fs.readFileSync('./testData/url.json', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    return JSON.parse(data);
  }
}
module.exports=readUrl