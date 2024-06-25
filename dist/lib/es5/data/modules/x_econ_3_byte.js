"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXEcon3Byte = void 0;
var ProtocolXEcon3Byte = /** @class */ (function () {
    function ProtocolXEcon3Byte(rawStatus) {
        this.rawStatus = rawStatus;
    }
    ProtocolXEcon3Byte.mask = BigInt(1) << BigInt(21);
    return ProtocolXEcon3Byte;
}());
exports.ProtocolXEcon3Byte = ProtocolXEcon3Byte;
