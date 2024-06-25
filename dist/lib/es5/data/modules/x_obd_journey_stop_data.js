"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXObdJourneyStopData = void 0;
var ProtocolXObdJourneyStopData = /** @class */ (function () {
    function ProtocolXObdJourneyStopData(lifetimeOdometerKm, lifetimeRunningHours, timeRunWithMilOn, distanceTravelledWithMilOn) {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.lifetimeRunningHours = lifetimeRunningHours;
        this.timeRunWithMilOn = timeRunWithMilOn;
        this.distanceTravelledWithMilOn = distanceTravelledWithMilOn;
    }
    ProtocolXObdJourneyStopData.mask = BigInt(1) << BigInt(16);
    return ProtocolXObdJourneyStopData;
}());
exports.ProtocolXObdJourneyStopData = ProtocolXObdJourneyStopData;
