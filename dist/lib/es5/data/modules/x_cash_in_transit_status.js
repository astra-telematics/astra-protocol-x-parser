"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXCashInTransitStatus = void 0;
var ProtocolXCashInTransitStatus = /** @class */ (function () {
    function ProtocolXCashInTransitStatus(extendedStatus, reserved) {
        this.extendedStatus = extendedStatus;
        this.reserved = reserved;
    }
    ProtocolXCashInTransitStatus.mask = BigInt(1) << BigInt(38);
    return ProtocolXCashInTransitStatus;
}());
exports.ProtocolXCashInTransitStatus = ProtocolXCashInTransitStatus;
