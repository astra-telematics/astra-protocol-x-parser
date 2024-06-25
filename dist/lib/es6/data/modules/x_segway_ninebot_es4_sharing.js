var ProtocolXSegwayNinebotEs4Sharing = /** @class */ (function () {
    function ProtocolXSegwayNinebotEs4Sharing(currentSpeedKmh, internalBatteryVoltageV, externalBatteryVoltageV, dryBatteryVoltageV, internalBatterySocPercent, externalBatterySocPercent, overallBatterySocPercent, internalBatteryTemperature1Deg, internalBatteryTemperature2Deg, externalBatteryTemperature1Deg, externalBatteryTemperature2Deg, status) {
        this.currentSpeedKmh = currentSpeedKmh;
        this.internalBatteryVoltageV = internalBatteryVoltageV;
        this.externalBatteryVoltageV = externalBatteryVoltageV;
        this.dryBatteryVoltageV = dryBatteryVoltageV;
        this.internalBatterySocPercent = internalBatterySocPercent;
        this.externalBatterySocPercent = externalBatterySocPercent;
        this.overallBatterySocPercent = overallBatterySocPercent;
        this.internalBatteryTemperature1Deg = internalBatteryTemperature1Deg;
        this.internalBatteryTemperature2Deg = internalBatteryTemperature2Deg;
        this.externalBatteryTemperature1Deg = externalBatteryTemperature1Deg;
        this.externalBatteryTemperature2Deg = externalBatteryTemperature2Deg;
        this.status = status;
    }
    ProtocolXSegwayNinebotEs4Sharing.mask = BigInt(1) << BigInt(31);
    return ProtocolXSegwayNinebotEs4Sharing;
}());
export { ProtocolXSegwayNinebotEs4Sharing };
