"use strict";
exports.__esModule = true;
exports.MBnk = void 0;
//@author: Ashok Kumar Jha
var MBnk = /** @class */ (function () {
    function MBnk(r, p, ci) {
        if (ci === void 0) { ci = 1; }
        this._r = r;
        this._p = p;
        this._ci = (ci <= 0) ? 1 : ci;
    }
    MBnk.prototype.getR = function () {
        return this._r;
    };
    MBnk.prototype.getP = function () {
        return this._p;
    };
    MBnk.prototype.getCi = function () {
        return this._ci;
    };
    MBnk.prototype.acf = function () {
        return Math.pow((1 + (this._r * 0.01 / this._ci)), (this._p * this._ci));
    };
    MBnk.prototype.toString = function () {
        return "rate = ".concat(this.getR(), ", period = ").concat(this.getP(), ", cum/yr = ").concat(this.getCi(), ", ACF = ").concat(this.acf());
    };
    MBnk.prototype.fv = function (pv) {
        return pv * this.acf();
    };
    return MBnk;
}());
exports.MBnk = MBnk;
;
