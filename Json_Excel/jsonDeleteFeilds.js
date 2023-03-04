let fs = require('fs');

let jsonFileName = './JsonData/test.json';

let inputData = require(jsonFileName);

let changeFieilds = ['FIELD A','FIELD B','FIELD C','FIELD D', 'FIELD E', 'FIELD F'];

for (let element of inputData) {
    for (let feildName of changeFieilds) {
        delete element[feildName];
    }
}

fs.writeFile(jsonFileName, inputData, function (err) {
    if (err) {
      console.log(err);
    }
});
