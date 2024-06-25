"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXFmsJourneyStopData = void 0;
var ProtocolXFmsJourneyStopData = /** @class */ (function () {
    function ProtocolXFmsJourneyStopData(lifetimeOdometerKm, lifetimeRunningHours, axleWeightKg, journeyFuelUsedL, journeyCruiseControlTimeS, serviceDistanceKm) {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.lifetimeRunningHours = lifetimeRunningHours;
        this.axleWeightKg = axleWeightKg;
        this.journeyFuelUsedL = journeyFuelUsedL;
        this.journeyCruiseControlTimeS = journeyCruiseControlTimeS;
        this.serviceDistanceKm = serviceDistanceKm;
    }
    ProtocolXFmsJourneyStopData.mask = BigInt(1) << BigInt(15);
    return ProtocolXFmsJourneyStopData;
}());
exports.ProtocolXFmsJourneyStopData = ProtocolXFmsJourneyStopData;
