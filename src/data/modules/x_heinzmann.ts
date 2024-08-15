export class ProtocolXHeinzmannData
{
    static mask: bigint = BigInt(1) << BigInt(46);

    public batterySocPercent?: number;
    public batteryVoltageV?: number;
    public lifetimeOdometerM?: number;
    public canTimeS?: number;
    public reserved?: Buffer;

    constructor (
        batterySocPercent: number,
        batteryVoltageV: number,
        lifetimeOdometerM: number,
        canTimeS: number,
        reserved: Buffer

    )
    {
        this.batterySocPercent = batterySocPercent;
        this.batteryVoltageV = batteryVoltageV;
        this.lifetimeOdometerM = lifetimeOdometerM;
        this.canTimeS = canTimeS;
        this.reserved = reserved;
    }
}