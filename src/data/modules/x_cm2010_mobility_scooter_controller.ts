export class ProtocolXCm2010MobilityScooterController
{
    static mask: bigint = BigInt(1) << BigInt(44);

    public batterySocPercent: number;
    public speedKmh: number;
    public battery1VoltageV: number;
    public battery2VoltageV: number;
    public singleTripDistanceM: number;
    public status: number;
    public reserved: number;

    constructor (
        batterySocPercent: number,
        speedKmh: number,
        battery1VoltageV: number,
        battery2VoltageV: number,
        singleTripDistanceM: number,
        status: number,
        reserved: number
    )
    {
       this.batterySocPercent = batterySocPercent;
       this.speedKmh = speedKmh;
       this.battery1VoltageV = battery1VoltageV;
       this.battery2VoltageV = battery2VoltageV;
       this.singleTripDistanceM = singleTripDistanceM;
       this.status = status;
       this.reserved = reserved;
    }
}