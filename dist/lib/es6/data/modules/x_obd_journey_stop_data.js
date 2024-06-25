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
export { ProtocolXObdJourneyStopData };
