export class ProtocolXGoingGreenTheCoreBikeData
{
    static mask: bigint = BigInt(1) << BigInt(33);

    public bikeBatteryVoltageV: number;

    constructor (
        bikeBatteryVoltageV: number
    )
    {
        this.bikeBatteryVoltageV = bikeBatteryVoltageV;
    }
}