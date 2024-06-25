export class ProtocolXGsmNetworkInfo
{
    static mask: bigint = BigInt(1) << BigInt(6);

    public mcc: number;
    public mnc: number;

    constructor (
        mcc: number,
        mnc: number
    )
    {
        this.mcc = mcc;
        this.mnc = mnc;
    }
}