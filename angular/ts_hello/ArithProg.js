"use strict";
exports.__esModule = true;
exports.SERIES = exports.AP = void 0;
var AP = /** @class */ (function () {
    function AP(_ft, _cd) {
        this._ft = _ft;
        this._cd = _cd;
    }
    ;
    AP.prototype.getFt = function () {
        return this._ft;
    };
    AP.prototype.getCd = function () {
        return this._cd;
    };
    AP.prototype.getNthTerm = function (n) {
        return this._ft + (n - 1) * this._cd;
    };
    AP.prototype.sum = function (n) {
        return n * (2 * this._ft + (n - 1) * this._cd) / 2;
    };
    AP.prototype.getAM = function (n) {
        return (this._ft + this.getNthTerm(n)) / 2;
    };
    return AP;
}());
exports.AP = AP;
var SERIES;
(function (SERIES) {
    SERIES[SERIES["AP"] = 0] = "AP";
    SERIES[SERIES["GP"] = 1] = "GP";
})(SERIES = exports.SERIES || (exports.SERIES = {}));
