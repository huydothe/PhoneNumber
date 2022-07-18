"use strict";
exports.__esModule = true;
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(type, PhoneNum) {
        this.type = type;
        this.PhoneNum = PhoneNum;
    }
    Phone.prototype.getType = function () {
        return this.type;
    };
    return Phone;
}());
exports.Phone = Phone;
