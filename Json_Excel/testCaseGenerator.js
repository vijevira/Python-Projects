import { writeFile } from 'fs';

let jsonFileName = './JsonData/test.json';

let inputData = {
    'FIELD F': '',
    'FIELD E': '',
    'FIELD D': '',
    'FIELD C': '',
    'FIELD B': '',
    'FIELD A': '',
    'RECORD KEY BDP': 'BD000000PZSY',
    'FIN SERVICE CODES': '',
    TIMEZONE: '2',
    'ISO COUNTRY CODE': 'IT',
    'COUNTRY NAME': 'ITALY',
    'BRANCH INFORMATION': '',
    'BR POB NUMBER': '',
    'BR ZIP CODE': '',
    'BR CPS': '',
    'BR CITY': '',
    'BR STREET ADDRESS 4': '',
    'BR STREET ADDRESS 3': '',
    'BR STREET ADDRESS 2': '',
    'BR STREET ADDRESS 1': '',
    'OP POB NUMBER': '',
    'OP ZIP CODE': '',
    'OP CPS': '61121 PESARO',
    'OP CITY': 'PESARO',
    'OP STREET ADDRESS 4': '',
    'OP STREET ADDRESS 3': '',
    'OP STREET ADDRESS 2': '',
    'OP STREET ADDRESS 1': '53 VIALE VENEZIA',
    'RE POB NUMBER': '',
    'RE ZIP CODE': '',
    'RE CPS': '',
    'RE CITY': '',
    'RE STREET ADDRESS 4': '',
    'RE STREET ADDRESS 3': '',
    'RE STREET ADDRESS 2': '',
    'RE STREET ADDRESS 1': '',
    'ENTITY TYPE': 'Operational',
    'INSTITUTION TYPE': 'NONFINANCIAL',
    'INSTITUTION NAME': 'RENCO GROUP SPA',
    'LEGAL NAME': '',
    'SWIFT IA': 'N',
    'SWIFT FA': 'N',
    'SWIFT FIN': 'N',
    'SUBTYPE INDICATOR': 'NSWB',
    'OPERATIONALLY ACTIVE RECORD': 'Y',
    'RECORD STATUS': 'C',
    bic: 'REGUIT21XXX',
    branch_bic: 'XXX',
    bic8: 'REGUIT21',
    'EVENT DATE': '20150905',
    'EVENT TYPE': 'BIC PUBLISHED',
    'NEXT RECORD KEY': '',
    'PREVIOUS RECORD KEY': '',
    'RECORD KEY': 'BP0000004RA0',
    'CHANGED FIELD': '',
    'MODIFICATION FLAG': 'A',
    ndSourceFile: '88073b4e-37e7-43c1-a0c4-51839ae1720b'
}

let changeFieilds = {'FIELD F': 'F', 'FIELD E': 'E'};
let totalTestCases = 5;

let dataSet = [];
for (let i = 0; i < totalTestCases; i++){
    for (let feildName in changeFieilds) {
        if (changeFieilds.hasOwnProperty(feildName)){
            let newValue = changeFieilds[feildName] + i;
            inputData[feildName] = newValue;
        }
    }
    dataSet.push({...inputData});
}

dataSet = JSON.stringify(dataSet);
writeFile(jsonFileName, dataSet, function (err) {
    if (err) {
      console.log(err);
    }
});






