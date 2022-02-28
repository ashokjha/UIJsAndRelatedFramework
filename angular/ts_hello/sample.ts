
let num: number;
let flg: boolean;
let str: string;
let holder: any;
let arr1: number[] = [1, 2, 3.4];
let mixarr1: any[] = [1, "text", 3.4, true]; // Not good practice for mix type
const PI = 3.14
const AUTHOR = "ASHOK KUMAR JHA"
enum LANGUAGE {
    JAVA = 0, C = 1, Cpp = 2, HTML = 3,
    XML = 4, SHELLSCRIPT = 5, JAVASCRIPT = 6, PYTHON = 7,
    TYPESCRIPT = 8, SQL = 9, R = 10, TABLEAU = 11, CSS = 12
};
let backLang = LANGUAGE.JAVA;

let abc;
abc = "Test Message";
//First way : most frequently used
let res = (<string>abc).indexOf("Te") == 0;
//2nd way
let res1 = (abc as string).lastIndexOf("age") == 0;


let printme = msg => console.log(msg);

let add = (a, b) => a + b;

let result = add(2, 4);
printme("add(2,4) = " + result);

let cf = (fin: { r: number, p: number, ci: number }) => {
    let ucf = 0;
    let intv = fin.p;
    if (fin.ci == 0) {
        ucf = 1 + fin.r * 0.01;//Continuous Compounding in WIP
    } else {
        intv = fin.p * fin.ci;
        ucf = 1 + (fin.r * 0.01 / fin.ci);
    }
    return ucf ** intv;
};

printme("compounding Factor({r:10,p:20,ci:4}) = " + (cf({ r: 10, p: 20, ci: 4 })));
printme("compounding Factor({r:11,p:10,ci:0}) = " + (cf({ r: 11, p: 10, ci: 0 })));
printme("compounding Factor({r:12,p:5,ci:1}) = " + (cf({ r: 12, p: 5, ci: 1 })));


