"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXDevicePower = void 0;
var ProtocolXDevicePower = /** @class */ (function () {
    function ProtocolXDevicePower(externalVoltageV, batteryLevelPercent) {
        this.externalVoltageV = externalVoltageV;
        this.batteryLevelPercent = batteryLevelPercent;
    }
    ProtocolXDevicePower.mask = BigInt(1) << BigInt(0);
    return ProtocolXDevicePower;
}());
exports.ProtocolXDevicePower = ProtocolXDevicePower;
