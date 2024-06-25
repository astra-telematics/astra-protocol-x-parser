export class ProtocolXObdJourneyStopData
{
    static mask: bigint = BigInt(1) << BigInt(16);

    public lifetimeOdometerKm: number;
    public lifetimeRunningHours: number;
    public timeRunWithMilOn: number;
    public distanceTravelledWithMilOn: number;

    constructor (
        lifetimeOdometerKm: number,
        lifetimeRunningHours: number,
        timeRunWithMilOn: number,
        distanceTravelledWithMilOn: number
    )
    {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.lifetimeRunningHours = lifetimeRunningHours;
        this.timeRunWithMilOn = timeRunWithMilOn;
        this.distanceTravelledWithMilOn = distanceTravelledWithMilOn;
    }
}