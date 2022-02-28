//Author: Ashok Kumar Jha
interface Bi {
    r:number;
    p:number;
    ci:number;
};


function logCf(bi: Bi) {
    console.log(`rate = ${bi.r}, period = ${bi.p}, cum/yr = ${bi.ci}, acf = ${acf(bi)}`);
}

function acf(bi:Bi){
    return (bi.ci==0) ? (1 + bi.r*0.01)**bi.p : (1 + (bi.r*0.01/bi.ci))**(bi.p*bi.ci)   
}

const bi:Bi = { r: 12, p: 6,ci:3};
logCf(bi);


