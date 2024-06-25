"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXGpsData = void 0;
var ProtocolXGpsData = /** @class */ (function () {
    function ProtocolXGpsData(latitude, longitude, speedKph, maxSpeedSinceLastReportKph, headingDeg, altitudeM, journeyDistanceKm) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.speedKph = speedKph;
        this.maxSpeedSinceLastReportKph = maxSpeedSinceLastReportKph;
        this.journeyDistanceKm = journeyDistanceKm;
        this.headingDeg = headingDeg;
        this.altitudeM = altitudeM;
    }
    ProtocolXGpsData.mask = BigInt(1) << BigInt(1);
    return ProtocolXGpsData;
}());
exports.ProtocolXGpsData = ProtocolXGpsData;
