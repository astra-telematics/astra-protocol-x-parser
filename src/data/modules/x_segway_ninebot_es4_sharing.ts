export class ProtocolXSegwayNinebotEs4Sharing
{
    static mask: bigint = BigInt(1) << BigInt(31);

    public currentSpeedKmh: number;
    public internalBatteryVoltageV: number;
    public externalBatteryVoltageV: number;
    public dryBatteryVoltageV: number;
    public internalBatterySocPercent: number;
    public externalBatterySocPercent: number;
    public overallBatterySocPercent: number;
    public internalBatteryTemperature1Deg: number;
    public internalBatteryTemperature2Deg: number;
    public externalBatteryTemperature1Deg: number;
    public externalBatteryTemperature2Deg: number;
    public status: number;

    constructor (
        currentSpeedKmh: number,
        internalBatteryVoltageV: number,
        externalBatteryVoltageV: number,
        dryBatteryVoltageV: number,
        internalBatterySocPercent: number,
        externalBatterySocPercent: number,
        overallBatterySocPercent: number,
        internalBatteryTemperature1Deg: number,
        internalBatteryTemperature2Deg: number,
        externalBatteryTemperature1Deg: number,
        externalBatteryTemperature2Deg: number,
        status: number
    )
    {
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
}