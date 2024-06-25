var ProtocolXCarrierTwoWayAlarms = /** @class */ (function () {
    function ProtocolXCarrierTwoWayAlarms(alarmCount, alarmQueue) {
        this.alarmCount = alarmCount;
        this.alarmQueue = alarmQueue;
    }
    ProtocolXCarrierTwoWayAlarms.mask = BigInt(1) << BigInt(19);
    return ProtocolXCarrierTwoWayAlarms;
}());
export { ProtocolXCarrierTwoWayAlarms };
