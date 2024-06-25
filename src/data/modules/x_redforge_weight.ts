export class ProtocolXRedforgeWeight
{
    static mask: bigint = BigInt(1) << BigInt(23);

    public frontChannel: number;
    public rearChannel: number;
    public grossVehicleWeight: number;
    public status: number;
    public faultCode1: number;
    public faultCode2: number;

    constructor (
        frontChannel: number,
        rearChannel: number,
        grossVehicleWeight: number,
        status: number,
        faultCode1: number,
        faultCode2: number
    )
    {
        this.frontChannel = frontChannel;
        this.rearChannel = rearChannel;
        this.grossVehicleWeight = grossVehicleWeight;
        this.status = status;
        this.faultCode1 = faultCode1;
        this.faultCode2 = faultCode2;
    }
}