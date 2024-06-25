export class ProtocolXBatteryUsageStatistics
{
    static mask: bigint = BigInt(1) << BigInt(40);

    public gnssAcquiringTimeS: number;
    public gnssFixingTimeS: number;
    public modemOnTimeS: number;
    public modemCsRegisteredTimeS: number;
    public modemPsRegisteredTimeS: number;
    public pdpActiveTimeS: number;
    public socketOpenTimeS: number;
    public awakeTimeS: number;
    public sleepTimeS: number;
    public externalPowerOnTimeS: number;
    public bleOnTimeS: number;
    public wakeCycleCount: number;
    public reportsSent: number;

    constructor (
        gnssAcquiringTimeS: number,
        gnssFixingTimeS: number,
        modemOnTimeS: number,
        modemCsRegisteredTimeS: number,
        modemPsRegisteredTimeS: number,
        pdpActiveTimeS: number,
        socketOpenTimeS: number,
        awakeTimeS: number,
        sleepTimeS: number,
        externalPowerOnTimeS: number,
        bleOnTimeS: number,
        wakeCycleCount: number,
        reportsSent: number
    )
    {
        this.gnssAcquiringTimeS = gnssAcquiringTimeS;
        this.gnssFixingTimeS = gnssFixingTimeS;
        this.modemOnTimeS = modemOnTimeS;
        this.modemCsRegisteredTimeS = modemCsRegisteredTimeS;
        this.modemPsRegisteredTimeS = modemPsRegisteredTimeS;
        this.pdpActiveTimeS = pdpActiveTimeS;
        this.socketOpenTimeS = socketOpenTimeS;
        this.awakeTimeS = awakeTimeS;
        this.sleepTimeS = sleepTimeS;
        this.externalPowerOnTimeS = externalPowerOnTimeS;
        this.bleOnTimeS = bleOnTimeS;
        this.wakeCycleCount = wakeCycleCount;
        this.reportsSent = reportsSent;
    }
}