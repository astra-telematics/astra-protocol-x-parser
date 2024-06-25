var ProtocolXCar2Data = /** @class */ (function () {
    function ProtocolXCar2Data(batterySocRaw, batteryChargingMode, seatbeltStatus, brakePosition, status, faults) {
        this.batterySocRaw = batterySocRaw;
        this.batteryChargingMode = batteryChargingMode;
        this.seatbeltStatus = seatbeltStatus;
        this.brakePosition = brakePosition;
        this.status = status;
        this.faults = faults;
    }
    ProtocolXCar2Data.mask = BigInt(1) << BigInt(42);
    return ProtocolXCar2Data;
}());
export { ProtocolXCar2Data };
