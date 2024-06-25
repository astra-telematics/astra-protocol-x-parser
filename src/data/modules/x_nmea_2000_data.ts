export class ProtocolXNmea2000Data
{
    static mask: bigint = BigInt(1) << BigInt(25);

    public fuelLevelPercent: number;
    public oilLevelPercent: number;
    public stateOfChargePercent: number;
    public stateOfHealthPercent: number;
    public batteryCapacity: number;
    public chargerEnableDisable: number;
    public timeToEmpty: number;
    public distanceToEmpty: number;
    public tripRunTime: number;
    public tripFuelUsed: number;
    public engineOilPressurePa: number;
    public engineOilTemperatureDegK: number;
    public engineTemperatureDegK: number;
    public alternatorVoltageMv: number;
    public fuelRateM3h: number;
    public totalEngineHours: number;
    public engineCoolantPressure: number;
    public fuelPressure: number;
    public engineDiscreteStatus1: number;
    public engineDiscreteStatus2: number;
    public engineLoadPercent: number;
    public engineTorquePercent: number;
    public waterDepthAtTransducerM: number;
    public waterDepthTransducerOffsetM: number;
    public windSpeedMps: number;
    public airTemperatureDegK: number;
    public reserved: Buffer;

    constructor (
        fuelLevelPercent: number,
        oilLevelPercent: number,
        stateOfChargePercent: number,
        stateOfHealthPercent: number,
        batteryCapacity: number,
        chargerEnableDisable: number,
        timeToEmpty: number,
        distanceToEmpty: number,
        tripRunTime: number,
        tripFuelUsed: number,
        engineOilPressurePa: number,
        engineOilTemperatureDegK: number,
        engineTemperatureDegK: number,
        alternatorVoltageMv: number,
        fuelRateM3h: number,
        totalEngineHours: number,
        engineCoolantPressure: number,
        fuelPressure: number,
        engineDiscreteStatus1: number,
        engineDiscreteStatus2: number,
        engineLoadPercent: number,
        engineTorquePercent: number,
        waterDepthAtTransducerM: number,
        waterDepthTransducerOffsetM: number,
        windSpeedMps: number,
        airTemperatureDegK: number,
        reserved: Buffer
    )
    {
        this.fuelLevelPercent = fuelLevelPercent;
        this.oilLevelPercent = oilLevelPercent;
        this.stateOfChargePercent = stateOfChargePercent;
        this.stateOfHealthPercent = stateOfHealthPercent;
        this.batteryCapacity = batteryCapacity;
        this.chargerEnableDisable = chargerEnableDisable;
        this.timeToEmpty = timeToEmpty;
        this.distanceToEmpty = distanceToEmpty;
        this.tripRunTime = tripRunTime;
        this.tripFuelUsed = tripFuelUsed;
        this.engineOilPressurePa = engineOilPressurePa;
        this.engineOilTemperatureDegK = engineOilTemperatureDegK;
        this.engineTemperatureDegK = engineTemperatureDegK;
        this.alternatorVoltageMv = alternatorVoltageMv;
        this.fuelRateM3h = fuelRateM3h;
        this.totalEngineHours = totalEngineHours;
        this.engineCoolantPressure = engineCoolantPressure;
        this.fuelPressure = fuelPressure;
        this.engineDiscreteStatus1 = engineDiscreteStatus1;
        this.engineDiscreteStatus2 = engineDiscreteStatus2;
        this.engineLoadPercent = engineLoadPercent;
        this.engineTorquePercent = engineTorquePercent;
        this.waterDepthAtTransducerM = waterDepthAtTransducerM;
        this.waterDepthTransducerOffsetM = waterDepthTransducerOffsetM;
        this.windSpeedMps = windSpeedMps;
        this.airTemperatureDegK = airTemperatureDegK;
        this.reserved = reserved;
    }
}