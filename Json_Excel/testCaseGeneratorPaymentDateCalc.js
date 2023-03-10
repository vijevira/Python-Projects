let fs = require('fs');

let jsonFileName = './JsonData/nachPaymentDateCalculation.json';

let inputData = [
  "paysysDate - , ReqExecDate - , minLeadDays - , maxLeadDays - , custFileProcLeadDays (customer level)- , floatDays (customer level) - , allowChangeRED - , msgReleaseInd - ",
  {
    "enabled": true,
    "payload": {
      "reqId": "f8a77d9e-22b6-44ef-9ddf-e924bfae8b67",
      "profileId": "OOTB",
      "paysysId": "NACH",
      "status": "S",
      "srvcId1": "NCP",
      "srvcId2": "O",
      "srvcId3": "C",
      "srvcId4": "NACH",
      "srvcId5": null,
      "isoData": {
        "Document": {
          "CstmrCdtTrfInitn": {
            "GrpHdr": {
              "MsgId": "PAIN001FEB04T121",
              "Authstn": [
                null,
                null
              ],
              "CreDtTm": "2022-08-31T06:06:48.445Z",
              "NbOfTxs": "1",
              "InitgPty": {
                "Nm": "InitgPtyNACH",
                "PstlAdr": {
                  "Flr": "Flr1",
                  "Ctry": "US",
                  "Dept": "DEPT0001",
                  "Room": "Room1",
                  "AdrTp": {
                    "Cd": "ADDR"
                  },
                  "PstBx": "PstBx1",
                  "PstCd": "111222",
                  "TwnNm": "TOWNNAME",
                  "BldgNb": "BUILDNO",
                  "BldgNm": "BldgNm",
                  "StrtNm": "STREETNAME",
                  "SubDept": "SUBDEPT0001",
                  "DstrctNm": "DstrctNm1",
                  "TwnLctnNm": "TwnLctnNm1",
                  "CtrySubDvsn": "CNTRYSUBDIV"
                },
                "CtctDtls": {
                  "Nm": "IPIContactName",
                  "Dept": "Dept1",
                  "Othr": {
                    "Id": "Id1",
                    "ChanlTp": "Cha1"
                  },
                  "FaxNb": "+1-212-9876543",
                  "MobNb": "+44-(456)78568743",
                  "NmPrfx": "MIKS",
                  "PhneNb": "+49-3102345678",
                  "JobTitl": "JobTitl1",
                  "EmailAdr": "Tester1@gmail.com",
                  "EmailPurp": "EmailPurp1",
                  "PrefrdMtd": "CELL",
                  "Rspnsblty": "Rspnsblty1"
                },
                "CtryOfRes": "US"
              }
            },
            "PmtInf": {
              "Dbtr": {
                "Nm": "InitiatorName",
                "PstlAdr": {
                  "Flr": "Flr1",
                  "Room": "Room1",
                  "AdrTp": {
                    "Cd": "PBOX"
                  },
                  "PstBx": "PstBx1",
                  "BldgNm": "BldgNm",
                  "AdrLine": "AdrLine",
                  "DstrctNm": "DstrctNm1",
                  "TwnLctnNm": "TwnLctnNm1"
                },
                "CtctDtls": {
                  "Nm": "DBTR ContactName",
                  "Dept": "Dept1",
                  "Othr": {
                    "Id": "Id1",
                    "ChanlTp": "Cha1"
                  },
                  "FaxNb": "+091-9912923631",
                  "MobNb": "+091-9912923631",
                  "NmPrfx": "MISS",
                  "PhneNb": "+091-9912923638",
                  "JobTitl": "JobTitl1",
                  "EmailAdr": "DBTester@gmail.com",
                  "EmailPurp": "EmailPurp1",
                  "PrefrdMtd": "FAXX",
                  "Rspnsblty": "Rspnsblty1"
                },
                "CtryOfRes": "US"
              },
              "PmtMtd": "TRF",
              "DbtrAgt": {
                "FinInstnId": {
                  "LEI": "0F3EPDKAN454N263W600",
                  "Othr": {
                    "Id": "CBIN0000001",
                    "Issr": "Dbt",
                    "SchmeNm": {
                      "Prtry": "DbtrAgentOthrPrty"
                    }
                  },
                  "BICFI": "REGUIT22XXX",
                  "ClrSysMmbId": {
                    "MmbId": "110001001",
                    "ClrSysId": {
                      "Cd": "CACPA"
                    }
                  }
                }
              },
              "NbOfTxs": "1",
              "DbtrAcct": {
                "Id": {
                  "Othr": {
                    "Id": "DUMMYSTUBFPSINR"
                  }
                },
                "Nm": "Test",
                "Tp": {
                  "Prtry": "X"
                },
                "Ccy": "INR"
              },
              "PmtInfId": "PMTINFd7468feaf6786048382134763001",
              "BtchBookg": "false",
              "ReqdExctnDt": {
                "Dt": "2022-02-10"
              },
              "PoolgAdjstmntDt": "2022-02-10",
              "CdtTrfTxInf": {
                "Amt": {
                  "InstdAmt": {
                    "attr": {
                      "Ccy": "INR"
                    },
                    "value": "56.78"
                  }
                },
                "Cdtr": {
                  "Nm": "Siemens Company",
                  "PstlAdr": {
                    "Flr": "Flr13",
                    "Room": "Room13",
                    "AdrTp": {
                      "Cd": "ADDR"
                    },
                    "PstBx": "PstBx13",
                    "BldgNm": "BldgNm13",
                    "AdrLine": "AdrLine",
                    "DstrctNm": "DstrctNm13",
                    "TwnLctnNm": "TwnLctnNm13"
                  },
                  "CtctDtls": {
                    "Nm": "Siemens Company",
                    "Dept": "Dept13",
                    "Othr": {
                      "Id": "Siemens Official",
                      "ChanlTp": "FBPG"
                    },
                    "FaxNb": "+49-697976662",
                    "MobNb": "+49-697976661",
                    "NmPrfx": "MIST",
                    "PhneNb": "+49-697976660",
                    "JobTitl": "JobTitl13",
                    "EmailAdr": "support@siemens.com",
                    "EmailPurp": "EmailPurp13",
                    "PrefrdMtd": "LETT",
                    "Rspnsblty": "Rspnsblty13"
                  },
                  "CtryOfRes": "DE"
                },
                "Purp": {
                  "Cd": "BKDF"
                },
                "PmtId": {
                  "UETR": "a09a8e26-0b90-463e-ba0f-dae2a634cd9b",
                  "InstrId": "013/00182/00001",
                  "EndToEndId": "NOTPROVIDED"
                },
                "ChrgBr": "SHAR",
                "RmtInf": {
                  "Strd": {
                    "AddtlRmtInf": "LPGHPCLSB"
                  }
                },
                "CdtrAgt": {
                  "FinInstnId": {
                    "LEI": "0F3EPDKAN454N263W600",
                    "BICFI": "REGUIT23XXX",
                    "ClrSysMmbId": {
                      "MmbId": "110001002",
                      "ClrSysId": {
                        "Cd": "CACPA"
                      }
                    }
                  }
                },
                "CdtrAcct": {
                  "Id": {
                    "Othr": {
                      "Id": "DUMMYSTUBFPSINR"
                    }
                  }
                },
                "PmtTpInf": {
                  "SvcLvl": {
                    "Prtry": "NPCI"
                  },
                  "CtgyPurp": {
                    "Prtry": "12"
                  },
                  "LclInstrm": {
                    "Prtry": "12"
                  }
                },
                "XchgRateInf": {
                  "CtrctId": "DEALREFNUM001"
                }
              }
            }
          }
        }
      },
      "msg_srl_num": "f8a77d9e-22b6-44ef-9ddf-e924bfae8b67",
      "group_master_id": "6ae4f962-0583-40d3-a624-8e14f291946a",
      "file_hdr_srl_num": "87baa8ac-c456-43de-8e6e-63b8a855e69a",
      "batch_hdr_srl_num": "1aa0f05d-199b-4269-86f2-4eec831ca1b4",
      "callerProcess": "CMNPYMT_MH",
      "retryCount": 0,
      "id": "394438a9-8d50-4e31-86f0-898502ee05b8",
      "_type": "CmnPymtOrder",
      "_createdBy": "system",
      "_modifiedBy": "system",
      "_createdOn": "2023-03-06T10:34:51.836Z",
      "_modifiedOn": "2023-03-06T10:34:51.836Z",
      "deliveryTag": {
        "fields": {
          "deliveryTag": 1
        }
      },
      "msgContextHdr": {
        "callContext": {
          "ctx": {
            "requestId": "3a41263a-eb3c-449e-a9b3-274b41c5b9cb"
          }
        },
        "deliveryTag": {
          "fields": {
            "deliveryTag": 1
          }
        },
        "queueName": "NACH-OUTPY-NCP"
      },
      "_msgid": "6031bee7.e1da",
      "queueName": "NACH-OUTPY-NCP"
    },
    "assertion": {
      "entityDtls": {
        "paysysId": "NACH",
        "reqExecDate": "2023-01-01T00:00:00.000Z",
        "settlementProcessingDate": "2023-01-01T00:00:00.000Z",
        "customerProcessingDate": "2023-01-01T00:00:00.000Z",
        "messageProcessingDate": "2023-01-01T00:00:00.000Z",
        "processSequence": null,
        "custProcDrValueDate": "2023-01-01T00:00:00.000Z",
        "crAcct": "DUMMYSTUBFPSINR",
        "drAcct": "DUMMYSTUBFPSINR",
        "addtlDtls": {}
      }
    },
    "paysysDateFlag": "01-02-2022"
  }
]

let totalTestCases = 30;

let dataSet = {};
let testCase = " - ( No error - Outbound NCP nachPaymentDateCalculation )";
for (let i = 1; i <= totalTestCases; i++) {
  let num = (i < 10)?'0'+i:i
  let scenario = "Test Case : " + num + testCase;
  // let payload = {};
  dataSet[scenario] = [...inputData];
}


dataSet = JSON.stringify(dataSet);
// console.log(dataSet);

fs.writeFileSync(jsonFileName, dataSet, function (err) {
  if (err) {
    console.log(err);
  }
});






