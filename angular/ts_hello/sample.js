var num;
var flg;
var str;
var holder;
var arr1 = [1, 2, 3.4];
var mixarr1 = [1, "text", 3.4, true]; // Not good practice for mix type
var PI = 3.14;
var AUTHOR = "ASHOK KUMAR JHA";
var LANGUAGE;
(function (LANGUAGE) {
    LANGUAGE[LANGUAGE["JAVA"] = 0] = "JAVA";
    LANGUAGE[LANGUAGE["C"] = 1] = "C";
    LANGUAGE[LANGUAGE["Cpp"] = 2] = "Cpp";
    LANGUAGE[LANGUAGE["HTML"] = 3] = "HTML";
    LANGUAGE[LANGUAGE["XML"] = 4] = "XML";
    LANGUAGE[LANGUAGE["SHELLSCRIPT"] = 5] = "SHELLSCRIPT";
    LANGUAGE[LANGUAGE["JAVASCRIPT"] = 6] = "JAVASCRIPT";
    LANGUAGE[LANGUAGE["PYTHON"] = 7] = "PYTHON";
    LANGUAGE[LANGUAGE["TYPESCRIPT"] = 8] = "TYPESCRIPT";
    LANGUAGE[LANGUAGE["SQL"] = 9] = "SQL";
    LANGUAGE[LANGUAGE["R"] = 10] = "R";
    LANGUAGE[LANGUAGE["TABLEAU"] = 11] = "TABLEAU";
    LANGUAGE[LANGUAGE["CSS"] = 12] = "CSS";
})(LANGUAGE || (LANGUAGE = {}));
;
var backLang = LANGUAGE.JAVA;
var abc;
abc = "Test Message";
//First way : most frequently used
var res = abc.indexOf("Te") == 0;
//2nd way
var res1 = abc.lastIndexOf("age") == 0;
var printme = function (msg) { return console.log(msg); };
var add = function (a, b) { return a + b; };
var result = add(2, 4);
printme("add(2,4) = " + result);
var cf = function (fin) {
    var ucf = 0;
    var intv = fin.p;
    if (fin.ci == 0) {
        ucf = 1 + fin.r * 0.01; //Continuous Compounding in WIP
    }
    else {
        intv = fin.p * fin.ci;
        ucf = 1 + (fin.r * 0.01 / fin.ci);
    }
    return Math.pow(ucf, intv);
};
printme("compounding Factor({r:10,p:20,ci:4}) = " + (cf({ r: 10, p: 20, ci: 4 })));
printme("compounding Factor({r:11,p:10,ci:0}) = " + (cf({ r: 11, p: 10, ci: 0 })));
printme("compounding Factor({r:12,p:5,ci:1}) = " + (cf({ r: 12, p: 5, ci: 1 })));
