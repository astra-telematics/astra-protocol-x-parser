"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXGnssStopReportData = void 0;
var ProtocolXGnssStopReportData = /** @class */ (function () {
    function ProtocolXGnssStopReportData(lifetimeOdometerKm, engineRunningHours) {
        this.lifetimeOdometerKm = lifetimeOdometerKm;
        this.engineRunningHours = engineRunningHours;
    }
    ProtocolXGnssStopReportData.mask = BigInt(1) << BigInt(11);
    return ProtocolXGnssStopReportData;
}());
exports.ProtocolXGnssStopReportData = ProtocolXGnssStopReportData;
