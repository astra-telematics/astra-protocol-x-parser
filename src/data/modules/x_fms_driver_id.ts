export class ProtocolXFmsDriverId
{
    static mask: bigint = BigInt(1) << BigInt(28);

    public driverId1: string;
    public driverId2: string;

    constructor (
        driverId1: string,
        driverId2: string
    )
    {
        this.driverId1 = driverId1;
        this.driverId2 = driverId2;
    }
}