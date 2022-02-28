;
function logCf(bi) {
    console.log("rate = ".concat(bi.r, ", period = ").concat(bi.p, ", cum/yr = ").concat(bi.ci, ", acf = ").concat(acf(bi)));
}
function acf(bi) {
    return (bi.ci == 0) ? Math.pow((1 + bi.r * 0.01), bi.p) : Math.pow((1 + (bi.r * 0.01 / bi.ci)), (bi.p * bi.ci));
}
var bi = { r: 12, p: 6, ci: 3 };
logCf(bi);
