"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXSimSubscriberId = void 0;
var ProtocolXSimSubscriberId = /** @class */ (function () {
    function ProtocolXSimSubscriberId(imsi) {
        this.imsi = imsi;
    }
    ProtocolXSimSubscriberId.mask = BigInt(1) << BigInt(26);
    return ProtocolXSimSubscriberId;
}());
exports.ProtocolXSimSubscriberId = ProtocolXSimSubscriberId;
