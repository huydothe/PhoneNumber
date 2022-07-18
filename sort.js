"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sort = void 0;
var demo_1 = require("./demo");
var Sort = /** @class */ (function (_super) {
    __extends(Sort, _super);
    function Sort(type, PhoneNum) {
        var _this = _super.call(this, type, PhoneNum) || this;
        _this.Storage = [];
        _this.viettel = [];
        _this.vinaphone = [];
        _this.mobifone = [];
        _this.Storage = [];
        _this.viettel = [];
        _this.vinaphone = [];
        _this.mobifone = [];
        return _this;
    }
    Sort.prototype.getViettel = function () {
        return this.viettel;
    };
    Sort.prototype.getMobifone = function () {
        return this.mobifone;
    };
    Sort.prototype.getVinaphone = function () {
        return this.vinaphone;
    };
    Sort.prototype.setPhone = function (phone) {
        if (phone.getType() === 'viettel') {
            this.getViettel().push(phone);
            return this.getViettel();
        }
        else if (phone.getType() === 'mobifone') {
            this.getMobifone().push(phone);
            return this.getMobifone();
        }
        else if (phone.getType() === 'vinaphone') {
            this.getVinaphone().push(phone);
            return this.getVinaphone();
        }
    };
    return Sort;
}(demo_1.Phone));
exports.Sort = Sort;
