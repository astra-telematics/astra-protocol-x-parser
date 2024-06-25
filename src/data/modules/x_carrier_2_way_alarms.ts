export class ProtocolXCarrierTwoWayAlarms
{
    static mask: bigint = BigInt(1) << BigInt(19);

    public alarmCount: number;
    public alarmQueue: Buffer;

    constructor (
        alarmCount: number,
        alarmQueue: Buffer
    )
    {
        this.alarmCount = alarmCount;
        this.alarmQueue = alarmQueue;
    }
}