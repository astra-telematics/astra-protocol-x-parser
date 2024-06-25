"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXDriverId = void 0;
var ProtocolXDriverId = /** @class */ (function () {
    function ProtocolXDriverId(source, serialNumber) {
        this.source = source;
        this.serialNumber = serialNumber;
    }
    ProtocolXDriverId.mask = BigInt(1) << BigInt(8);
    return ProtocolXDriverId;
}());
exports.ProtocolXDriverId = ProtocolXDriverId;
