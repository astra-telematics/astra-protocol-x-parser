"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXGsmNetworkInfo = void 0;
var ProtocolXGsmNetworkInfo = /** @class */ (function () {
    function ProtocolXGsmNetworkInfo(mcc, mnc) {
        this.mcc = mcc;
        this.mnc = mnc;
    }
    ProtocolXGsmNetworkInfo.mask = BigInt(1) << BigInt(6);
    return ProtocolXGsmNetworkInfo;
}());
exports.ProtocolXGsmNetworkInfo = ProtocolXGsmNetworkInfo;
