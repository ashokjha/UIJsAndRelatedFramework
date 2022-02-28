//@auther : Ashok Kumar Jha

function logging(message) {
    console.log(message)
}

import {AP,SERIES} from './ArithProg';
import {MBnk} from './BankingCI';

let ap = new AP(5,2);
logging("*********SERIES AP "+SERIES.AP+"*********")
logging("5th term of AP with First Term = 5, common Diff = 2 is " + ap.getNthTerm(5));
logging("Sum of 10 term of AP with First Term = 5, common Diff = 2 is "+ap.sum(10));
logging("Arithmatic Mean of 12 term of AP  with First Term = 5, common Diff = 2 is "+ap.getAM(12));

logging("********** BANKING *****************")

let bi = new MBnk(10,15,2);

logging(bi.toString());
logging("FV of 100000 = "+bi.fv(100000));