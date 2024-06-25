export declare class ProtocolXFmsInJourneyData {
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
    fmsStatusMask: number;
    fmsEventsMask: number;
    fuelLevelRaw: number;
    totalFuelUsedL: number;
    constructor(maxWheelBasedSpeedKmh: number, averageWheelBasedSpeedKmh: number, maxEngineRpm: number, averageEngineRpm: number, maxAcceleratorPositionPercent: number, averageAcceleratorPositionPercent: number, maxEngineLoadPercent: number, averageEngineLoadPercent: number, journeyDistanceKm: number, engineTemperatureDeg: number, fmsStatusMask: number, fmsEventsMask: number, fuelLevelRaw: number, totalFuelUsedL: number);
}
