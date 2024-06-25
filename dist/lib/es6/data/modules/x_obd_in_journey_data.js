var ProtocolXObdInJourneyData = /** @class */ (function () {
    function ProtocolXObdInJourneyData(maxWheelBasedSpeedKmh, averageWheelBasedSpeedKmh, maxEngineRpm, averageEngineRpm, maxAcceleratorPositionPercent, averageAcceleratorPositionPercent, maxEngineLoadPercent, averageEngineLoadPercent, journeyDistanceKm, engineTemperatureDeg, obdStatusMask, obdEventsMask, fuelLevelRaw, journeyFuelUsedL) {
        this.maxWheelBasedSpeedKmh = maxWheelBasedSpeedKmh;
        this.averageWheelBasedSpeedKmh = averageWheelBasedSpeedKmh;
        this.maxEngineRpm = maxEngineRpm;
        this.averageEngineRpm = averageEngineRpm;
        this.maxAcceleratorPositionPercent = maxAcceleratorPositionPercent;
        this.averageAcceleratorPositionPercent = averageAcceleratorPositionPercent;
        this.maxEngineLoadPercent = maxEngineLoadPercent;
        this.averageEngineLoadPercent = averageEngineLoadPercent;
        this.journeyDistanceKm = journeyDistanceKm;
        this.engineTemperatureDeg = engineTemperatureDeg;
        this.obdStatusMask = obdStatusMask;
        this.obdEventsMask = obdEventsMask;
        this.fuelLevelRaw = fuelLevelRaw;
        this.journeyFuelUsedL = journeyFuelUsedL;
    }
    ProtocolXObdInJourneyData.mask = BigInt(1) << BigInt(13);
    return ProtocolXObdInJourneyData;
}());
export { ProtocolXObdInJourneyData };
