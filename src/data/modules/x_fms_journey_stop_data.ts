export class ProtocolXFmsJourneyStopData
{
    static mask: bigint = BigInt(1) << BigInt(15);

    public lifetimeOdometerKm: number;
    public lifetimeRunningHours: number;
    public axleWeightKg: number;
    public journeyFuelUsedL: number;
    public journeyCruiseControlTimeS: number;
    public serviceDistanceKm: number;

    constructor (
        lifetimeOdometerKm: number,
        lifetimeRunningHours: number,
        axleWeightKg: number,
        journeyFuelUsedL: number,
        journeyCruiseControlTimeS: number,
        serviceDistanceKm: number,
    )
    {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.lifetimeRunningHours = lifetimeRunningHours;
        this.axleWeightKg = axleWeightKg;
        this.journeyFuelUsedL = journeyFuelUsedL;
        this.journeyCruiseControlTimeS = journeyCruiseControlTimeS;
        this.serviceDistanceKm = serviceDistanceKm;
    }
}