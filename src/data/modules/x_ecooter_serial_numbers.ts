export class ProtocolXEcooterSerialNumbers
{
    static mask: bigint = BigInt(1) << BigInt(36);

    public battery1SerialNumber: string;
    public battery2SerialNumber: string;

    constructor (
        battery1SerialNumber: string,
        battery2SerialNumber: string
    )
    {
        this.battery1SerialNumber = battery1SerialNumber;
        this.battery2SerialNumber = battery2SerialNumber;
    }
}