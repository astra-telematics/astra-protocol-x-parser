export class ProtocolXGnssStopReportData
{
    static mask: bigint = BigInt(1) << BigInt(11);

    public lifetimeOdometerKm: number;
    public engineRunningHours: number;

    constructor (
        lifetimeOdometerKm: number,
        engineRunningHours: number
    )
    {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.engineRunningHours = engineRunningHours;
    }
}