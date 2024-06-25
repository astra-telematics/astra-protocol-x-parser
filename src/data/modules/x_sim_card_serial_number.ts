export class ProtocolXSimCardSerialNumber
{
    static mask: bigint = BigInt(1) << BigInt(27);

    public iccid: string;

    constructor (
        iccid: string
    )
    {
        this.iccid = iccid;
    }
}