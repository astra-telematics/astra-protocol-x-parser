export class ProtocolXDevicePower
{
    static mask: bigint = BigInt(1) << BigInt(0);

    public externalVoltageV: number;
    public batteryLevelPercent: number;

    constructor (
        externalVoltageV: number,
        batteryLevelPercent: number
    )
    {
        this.externalVoltageV = externalVoltageV;
        this.batteryLevelPercent = batteryLevelPercent;
    }
}