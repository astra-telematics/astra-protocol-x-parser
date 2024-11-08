"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXAstraGenericCanData = exports.ProtocolXAstraGenericCanDataEntry = void 0;
var ProtocolXAstraGenericCanDataEntry = /** @class */ (function () {
    function ProtocolXAstraGenericCanDataEntry(id, data, dataAgeS) {
        this.id = id;
        this.data = data;
        this.dataAgeS = dataAgeS;
    }
    return ProtocolXAstraGenericCanDataEntry;
}());
exports.ProtocolXAstraGenericCanDataEntry = ProtocolXAstraGenericCanDataEntry;
var ProtocolXAstraGenericCanData = /** @class */ (function () {
    function ProtocolXAstraGenericCanData() {
    }
    ProtocolXAstraGenericCanData.mask = BigInt(1) << BigInt(45);
    return ProtocolXAstraGenericCanData;
}());
exports.ProtocolXAstraGenericCanData = ProtocolXAstraGenericCanData;
