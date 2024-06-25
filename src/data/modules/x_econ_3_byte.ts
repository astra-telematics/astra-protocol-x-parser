export class ProtocolXEcon3Byte
{
    static mask: bigint = BigInt(1) << BigInt(21);

    public rawStatus: number;

    constructor (
        rawStatus: number
    )
    {
        this.rawStatus = rawStatus;
    }
}