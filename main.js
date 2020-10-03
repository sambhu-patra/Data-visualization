const csvtoJSON = require('csvtojson');
const fs = require('fs')
const csvFilePath = './insurance_sample.csv';
const noOfPolicy = require('./insurance/logic.js');
const increaseDecrease = require('./insurance/changesValue')
const Construction = require('./insurance/construction.js');

function getData () {
    csvtoJSON()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        let result = noOfPolicy((jsonObj));
        writeFile(result)
        let output = Construction(jsonObj);
        constructionWriteFile(output);  
        let value = increaseDecrease(jsonObj);
        changesValuesWriteFile(value);  
    })
}

// -------------------------noOfPolicy------------------------------------

function writeFile (data){
    let jsonData = {
        storeData : data
    }
    fs.writeFileSync("./public/output.json",JSON.stringify(jsonData),"utf-8",(err)=>{
        if(err){
            console.log(err)
        }
    })
}

// -------------------------------changes value with increase or decrease-------------------------

function changesValuesWriteFile (data){
    let jsonData = {
        noOfChangesValue : data
    }
    fs.writeFileSync("./public/changesValue.json",JSON.stringify(jsonData),"utf-8",(err)=>{
        if(err){
            console.log(err)
        }
    })
}

// ------------------------------construction----------------------------------------------

function constructionWriteFile (data){
    let jsonData = {
        noOfConstruction : data
    }
    fs.writeFileSync("./public/construction.json",JSON.stringify(jsonData),"utf-8",(err)=>{
        if(err){
            console.log(err)
        }
    })
}

getData();