"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXSimCardSerialNumber = void 0;
var ProtocolXSimCardSerialNumber = /** @class */ (function () {
    function ProtocolXSimCardSerialNumber(iccid) {
        this.iccid = iccid;
    }
    ProtocolXSimCardSerialNumber.mask = BigInt(1) << BigInt(27);
    return ProtocolXSimCardSerialNumber;
}());
exports.ProtocolXSimCardSerialNumber = ProtocolXSimCardSerialNumber;
