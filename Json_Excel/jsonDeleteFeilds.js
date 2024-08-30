let fs = require('fs');

let jsonFileName = './JsonData/test.json';

let inputData = require(jsonFileName);

let changeFieilds = ['auditLinkId', "workflowLinkId",
    "_type",
    "_createdBy",
    "_modifiedBy",
    "_createdOn",
    "_modifiedOn",
    "_requestId",
    "_oldVersion",
    "_version",
    "_newVersion",
    "_parentVersion",
    "_initiatedBy",
    "_initiatedOn",];

for (let element of inputData) {
    for (let feildName of changeFieilds) {
        delete element[feildName];
    }
}
inputData = JSON.stringify(inputData);
fs.writeFile(jsonFileName, inputData, function (err) {
    if (err) {
        console.log(err);
    }
});
