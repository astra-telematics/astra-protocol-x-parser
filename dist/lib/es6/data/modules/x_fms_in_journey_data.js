var ProtocolXFmsInJourneyData = /** @class */ (function () {
    function ProtocolXFmsInJourneyData(maxWheelBasedSpeedKmh, averageWheelBasedSpeedKmh, maxEngineRpm, averageEngineRpm, maxAcceleratorPositionPercent, averageAcceleratorPositionPercent, maxEngineLoadPercent, averageEngineLoadPercent, journeyDistanceKm, engineTemperatureDeg, fmsStatusMask, fmsEventsMask, fuelLevelRaw, totalFuelUsedL) {
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
        this.fmsStatusMask = fmsStatusMask;
        this.fmsEventsMask = fmsEventsMask;
        this.fuelLevelRaw = fuelLevelRaw;
        this.totalFuelUsedL = totalFuelUsedL;
    }
    ProtocolXFmsInJourneyData.mask = BigInt(1) << BigInt(12);
    return ProtocolXFmsInJourneyData;
}());
export { ProtocolXFmsInJourneyData };
