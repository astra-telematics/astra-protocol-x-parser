"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXBatteryUsageStatistics = void 0;
var ProtocolXBatteryUsageStatistics = /** @class */ (function () {
    function ProtocolXBatteryUsageStatistics(gnssAcquiringTimeS, gnssFixingTimeS, modemOnTimeS, modemCsRegisteredTimeS, modemPsRegisteredTimeS, pdpActiveTimeS, socketOpenTimeS, awakeTimeS, sleepTimeS, externalPowerOnTimeS, bleOnTimeS, wakeCycleCount, reportsSent) {
        this.gnssAcquiringTimeS = gnssAcquiringTimeS;
        this.gnssFixingTimeS = gnssFixingTimeS;
        this.modemOnTimeS = modemOnTimeS;
        this.modemCsRegisteredTimeS = modemCsRegisteredTimeS;
        this.modemPsRegisteredTimeS = modemPsRegisteredTimeS;
        this.pdpActiveTimeS = pdpActiveTimeS;
        this.socketOpenTimeS = socketOpenTimeS;
        this.awakeTimeS = awakeTimeS;
        this.sleepTimeS = sleepTimeS;
        this.externalPowerOnTimeS = externalPowerOnTimeS;
        this.bleOnTimeS = bleOnTimeS;
        this.wakeCycleCount = wakeCycleCount;
        this.reportsSent = reportsSent;
    }
    ProtocolXBatteryUsageStatistics.mask = BigInt(1) << BigInt(40);
    return ProtocolXBatteryUsageStatistics;
}());
exports.ProtocolXBatteryUsageStatistics = ProtocolXBatteryUsageStatistics;
