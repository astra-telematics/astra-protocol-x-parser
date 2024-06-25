export declare class ProtocolXGnssExtendedData {
    static mask: bigint;
    lastKnownGoddTimeDateJulianSecs: number;
    latitude: number;
    longitude: number;
    speedKmh: number;
    maxSpeedSinceLastReportKmh: number;
    headingDeg: number;
    altitudeM: number;
    journeyDistanceM: number;
    validFixAvailabilityPercent: number;
    svsInView: number;
    estimatedPositionErrorM: number;
    hdop: number;
    jammerDetectHitCount: number;
    constellationsSupportedEnabled: number;
    reserved: Buffer;
    constructor(lastKnownGoddTimeDateJulianSecs: number, latitude: number, longitude: number, speedKmh: number, maxSpeedSinceLastReportKmh: number, headingDeg: number, altitudeM: number, journeyDistanceM: number, validFixAvailabilityPercent: number, svsInView: number, estimatedPositionErrorM: number, hdop: number, jammerDetectHitCount: number, constellationsSupportedEnabled: number, reserved: Buffer);
}
