export class ProtocolXFmsInJourneyData
{
    static mask: bigint = BigInt(1) << BigInt(12);

    public maxWheelBasedSpeedKmh: number;
    public averageWheelBasedSpeedKmh: number;
    public maxEngineRpm: number;
    public averageEngineRpm: number;
    public maxAcceleratorPositionPercent: number;
    public averageAcceleratorPositionPercent: number;
    public maxEngineLoadPercent: number;
    public averageEngineLoadPercent: number;
    public journeyDistanceKm: number;
    public engineTemperatureDeg: number;
    public fmsStatusMask: number;
    public fmsEventsMask: number;
    public fuelLevelRaw: number;
    public totalFuelUsedL: number;

    constructor (
        maxWheelBasedSpeedKmh: number,
        averageWheelBasedSpeedKmh: number,
        maxEngineRpm: number,
        averageEngineRpm: number,
        maxAcceleratorPositionPercent: number,
        averageAcceleratorPositionPercent: number,
        maxEngineLoadPercent: number,
        averageEngineLoadPercent: number,
        journeyDistanceKm: number,
        engineTemperatureDeg: number,
        fmsStatusMask: number,
        fmsEventsMask: number,
        fuelLevelRaw: number,
        totalFuelUsedL: number
    )
    {
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
}