"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXCarrierTwoWayAlarms = void 0;
var ProtocolXCarrierTwoWayAlarms = /** @class */ (function () {
    function ProtocolXCarrierTwoWayAlarms(alarmCount, alarmQueue) {
        this.alarmCount = alarmCount;
        this.alarmQueue = alarmQueue;
    }
    ProtocolXCarrierTwoWayAlarms.mask = BigInt(1) << BigInt(19);
    return ProtocolXCarrierTwoWayAlarms;
}());
exports.ProtocolXCarrierTwoWayAlarms = ProtocolXCarrierTwoWayAlarms;
