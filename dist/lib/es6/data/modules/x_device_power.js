var ProtocolXDevicePower = /** @class */ (function () {
    function ProtocolXDevicePower(externalVoltageV, batteryLevelPercent) {
        this.externalVoltageV = externalVoltageV;
        this.batteryLevelPercent = batteryLevelPercent;
    }
    ProtocolXDevicePower.mask = BigInt(1) << BigInt(0);
    return ProtocolXDevicePower;
}());
export { ProtocolXDevicePower };
