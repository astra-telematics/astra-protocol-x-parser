export class ProtocolXObdInJourneyData
{
    static mask: bigint = BigInt(1) << BigInt(13);

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
    public obdStatusMask: number;
    public obdEventsMask: number;
    public fuelLevelRaw: number;
    public journeyFuelUsedL: number;

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
        obdStatusMask: number,
        obdEventsMask: number,
        fuelLevelRaw: number,
        journeyFuelUsedL: number
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
        this.obdStatusMask = obdStatusMask;
        this.obdEventsMask = obdEventsMask;
        this.fuelLevelRaw = fuelLevelRaw;
        this.journeyFuelUsedL = journeyFuelUsedL;
    }
}