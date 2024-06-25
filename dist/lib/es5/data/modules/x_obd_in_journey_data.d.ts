export declare class ProtocolXObdInJourneyData {
    static mask: bigint;
    maxWheelBasedSpeedKmh: number;
    averageWheelBasedSpeedKmh: number;
    maxEngineRpm: number;
    averageEngineRpm: number;
    maxAcceleratorPositionPercent: number;
    averageAcceleratorPositionPercent: number;
    maxEngineLoadPercent: number;
    averageEngineLoadPercent: number;
    journeyDistanceKm: number;
    engineTemperatureDeg: number;
    obdStatusMask: number;
    obdEventsMask: number;
    fuelLevelRaw: number;
    journeyFuelUsedL: number;
    constructor(maxWheelBasedSpeedKmh: number, averageWheelBasedSpeedKmh: number, maxEngineRpm: number, averageEngineRpm: number, maxAcceleratorPositionPercent: number, averageAcceleratorPositionPercent: number, maxEngineLoadPercent: number, averageEngineLoadPercent: number, journeyDistanceKm: number, engineTemperatureDeg: number, obdStatusMask: number, obdEventsMask: number, fuelLevelRaw: number, journeyFuelUsedL: number);
}
