export class ProtocolXFmsDriverWorkingStates
{
    static mask: bigint = BigInt(1) << BigInt(30);

    public driverWorkingStates: number;
    public doorControl1: number;

    constructor (
        driverWorkingStates: number,
        doorControl1: number
    )
    {
        this.driverWorkingStates = driverWorkingStates;
        this.doorControl1 = doorControl1;
    }
}