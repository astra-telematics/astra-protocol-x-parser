export class ProtocolXDriverAlcoholTestData
{
    static mask: bigint = BigInt(1) << BigInt(9);

    public rawStatus: number;
    public breathTestPass: boolean;
    public breathTestResultUgl: number;

    constructor (
        rawStatus: number,
        breathTestPass: boolean,
        breathTestResultUgl: number
    )
    {
        this.rawStatus = rawStatus;
        this.breathTestPass = breathTestPass;
        this.breathTestResultUgl = breathTestResultUgl;
    }
}