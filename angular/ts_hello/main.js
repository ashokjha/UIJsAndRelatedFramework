"use strict";
//@auther : Ashok Kumar Jha
exports.__esModule = true;
function logging(message) {
    console.log(message);
}
var ArithProg_1 = require("./ArithProg");
var BankingCI_1 = require("./BankingCI");
var ap = new ArithProg_1.AP(5, 2);
logging("*********SERIES AP " + ArithProg_1.SERIES.AP + "*********");
logging("5th term of AP with First Term = 5, common Diff = 2 is " + ap.getNthTerm(5));
logging("Sum of 10 term of AP with First Term = 5, common Diff = 2 is " + ap.sum(10));
logging("Arithmatic Mean of 12 term of AP  with First Term = 5, common Diff = 2 is " + ap.getAM(12));
logging("********** BANKING *****************");
var bi = new BankingCI_1.MBnk(10, 15, 2);
logging(bi.toString());
logging("FV of 100000 = " + bi.fv(100000));
