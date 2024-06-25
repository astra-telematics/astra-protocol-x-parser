export class ProtocolXTorrotMuviBatteryData
{
    static mask: bigint = BigInt(1) << BigInt(39);

    public battery1SerialNumber: string;
    public battery2SerialNumber: string;
    public battery1CycleCount: number;
    public battery2CycleCount: number;
    public battery1DistanceKm: number;
    public battery2DistanceKm: number;
    public status: number;
    public reserved: Buffer;

    constructor (
        battery1SerialNumber: string,
        battery2SerialNumber: string,
        battery1CycleCount: number,
        battery2CycleCount: number,
        battery1DistanceKm: number,
        battery2DistanceKm: number,
        status: number,
        reserved: Buffer
    )
    {
        this.battery1SerialNumber = battery1SerialNumber;
        this.battery2SerialNumber = battery2SerialNumber;
        this.battery1CycleCount = battery1CycleCount;
        this.battery2CycleCount = battery2CycleCount;
        this.battery1DistanceKm = battery1DistanceKm;
        this.battery2DistanceKm = battery2DistanceKm;
        this.status = status;
        this.reserved = reserved;
    }
}