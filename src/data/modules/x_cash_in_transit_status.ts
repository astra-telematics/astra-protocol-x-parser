export class ProtocolXCashInTransitStatus
{
    static mask: bigint = BigInt(1) << BigInt(38);

    public extendedStatus: number;
    public reserved: Buffer;

    constructor (
        extendedStatus: number,
        reserved: Buffer
    )
    {
        this.extendedStatus = extendedStatus;
        this.reserved = reserved;
    }
}