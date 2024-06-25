export declare class ProtocolXGpsData {
    static mask: bigint;
    latitude: number;
    longitude: number;
    speedKph: number;
    maxSpeedSinceLastReportKph: number;
    journeyDistanceKm: number;
    headingDeg: number;
    altitudeM: number;
    constructor(latitude: number, longitude: number, speedKph: number, maxSpeedSinceLastReportKph: number, headingDeg: number, altitudeM: number, journeyDistanceKm: number);
}
