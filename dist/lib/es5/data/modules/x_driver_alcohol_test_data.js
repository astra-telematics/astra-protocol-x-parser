"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXDriverAlcoholTestData = void 0;
var ProtocolXDriverAlcoholTestData = /** @class */ (function () {
    function ProtocolXDriverAlcoholTestData(rawStatus, breathTestPass, breathTestResultUgl) {
        this.rawStatus = rawStatus;
        this.breathTestPass = breathTestPass;
        this.breathTestResultUgl = breathTestResultUgl;
    }
    ProtocolXDriverAlcoholTestData.mask = BigInt(1) << BigInt(9);
    return ProtocolXDriverAlcoholTestData;
}());
exports.ProtocolXDriverAlcoholTestData = ProtocolXDriverAlcoholTestData;
