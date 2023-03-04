let XLSX = require("xlsx");
let fs = require("fs");

let excelFileName = "./ExcelData/demo.xls";
let jsonFileName = "./JsonData/demo.json";

let workbook = XLSX.readFile(excelFileName);
let sheet_name_list = workbook.SheetNames;

let skipKeys = (key) => {
  let keyList = ["auditLinkId"];
  if (keyList.includes(key)) {
    return true;
  }
  return key.startsWith("_");
};

sheet_name_list.forEach((keys) => {
  let worksheet = workbook.Sheets[keys];
  let headers = {};
  let data = [];
  for (let key in worksheet) {
    if (key[0] === "!") {
      continue;
    }
    let col = key.substring(0, 1);
    let row = parseInt(key.substring(1));

    let value = worksheet[key].v;
    if (!skipKeys(value)) {
      if (row === 1) {
        headers[col] = value;
      } else {
        if (!data[row]) {
          data[row] = {};
        }
        data[row][headers[col]] = value;
      }
    }
  }
  //drop those first two rows which are empty
  data.shift();
  data.shift();
  let dataSet = JSON.stringify(data);

  fs.writeFile(jsonFileName, dataSet, function (err) {
    if (err) {
      console.log(err);
    }
  });
});
