var ProtocolXGnssStopReportData = /** @class */ (function () {
    function ProtocolXGnssStopReportData(lifetimeOdometerKm, engineRunningHours) {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.engineRunningHours = engineRunningHours;
    }
    ProtocolXGnssStopReportData.mask = BigInt(1) << BigInt(11);
    return ProtocolXGnssStopReportData;
}());
export { ProtocolXGnssStopReportData };
