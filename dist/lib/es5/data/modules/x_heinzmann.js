"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXHeinzmannData = void 0;
var ProtocolXHeinzmannData = /** @class */ (function () {
    function ProtocolXHeinzmannData(batterySocPercent, batteryVoltageV, lifetimeOdometerM, canTimeS, reserved) {
        this.batterySocPercent = batterySocPercent;
        this.batteryVoltageV = batteryVoltageV;
        this.lifetimeOdometerM = lifetimeOdometerM;
        this.canTimeS = canTimeS;
        this.reserved = reserved;
    }
    ProtocolXHeinzmannData.mask = BigInt(1) << BigInt(46);
    return ProtocolXHeinzmannData;
}());
exports.ProtocolXHeinzmannData = ProtocolXHeinzmannData;
