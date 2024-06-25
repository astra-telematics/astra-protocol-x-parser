export class ProtocolXGnssExtendedData
{
    static mask: bigint = BigInt(1) << BigInt(43);

    public lastKnownGoddTimeDateJulianSecs: number;
    public latitude: number;
    public longitude: number;
    public speedKmh: number;
    public maxSpeedSinceLastReportKmh: number;
    public headingDeg: number;
    public altitudeM: number;
    public journeyDistanceM: number;
    public validFixAvailabilityPercent: number;
    public svsInView: number;
    public estimatedPositionErrorM: number;
    public hdop: number;
    public jammerDetectHitCount: number;
    public constellationsSupportedEnabled: number;
    public reserved: Buffer;

    constructor (
        lastKnownGoddTimeDateJulianSecs: number,
        latitude: number,
        longitude: number,
        speedKmh: number,
        maxSpeedSinceLastReportKmh: number,
        headingDeg: number,
        altitudeM: number,
        journeyDistanceM: number,
        validFixAvailabilityPercent: number,
        svsInView: number,
        estimatedPositionErrorM: number,
        hdop: number,
        jammerDetectHitCount: number,
        constellationsSupportedEnabled: number,
        reserved: Buffer
    )
    {
       this.lastKnownGoddTimeDateJulianSecs = lastKnownGoddTimeDateJulianSecs;
       this.latitude = latitude;
       this.longitude = longitude;
       this.speedKmh = speedKmh;
       this.maxSpeedSinceLastReportKmh = maxSpeedSinceLastReportKmh;
       this.headingDeg = headingDeg;
       this.altitudeM = altitudeM;
       this.journeyDistanceM = journeyDistanceM;
       this.validFixAvailabilityPercent = validFixAvailabilityPercent;
       this.svsInView = svsInView;
       this.estimatedPositionErrorM = estimatedPositionErrorM;
       this.hdop = hdop;
       this.jammerDetectHitCount = jammerDetectHitCount;
       this.constellationsSupportedEnabled = constellationsSupportedEnabled;
       this.reserved = reserved;
    }
}