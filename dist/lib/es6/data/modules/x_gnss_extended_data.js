var ProtocolXGnssExtendedData = /** @class */ (function () {
    function ProtocolXGnssExtendedData(lastKnownGoddTimeDateJulianSecs, latitude, longitude, speedKmh, maxSpeedSinceLastReportKmh, headingDeg, altitudeM, journeyDistanceM, validFixAvailabilityPercent, svsInView, estimatedPositionErrorM, hdop, jammerDetectHitCount, constellationsSupportedEnabled, reserved) {
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
    ProtocolXGnssExtendedData.mask = BigInt(1) << BigInt(43);
    return ProtocolXGnssExtendedData;
}());
export { ProtocolXGnssExtendedData };
