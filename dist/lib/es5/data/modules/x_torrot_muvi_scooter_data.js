"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXTorrotMuviScooterData = void 0;
var ProtocolXTorrotMuviScooterData = /** @class */ (function () {
    function ProtocolXTorrotMuviScooterData(battery1SocPercent, battery2SocPercent, battery1TotalCurrentMa, battery2TotalCurrentMa, battery1TotalVoltageMv, battery2TotalVoltageMv, battery1UserTotalCapacityMah, battery2UserTotalCapacityMah, battery1RatedCapacityAh, battery2RatedCapacityAh, battery1CapacityRemainingMah, battery2CapacityRemainingMah, battery1Alarm485, battery2Alarm485, batteryStatus, rpm, ecuHeartbeatCount, controllerTemperatureDeg, motorTemperatureDeg, throttlePositionPercent, speedKmh, lifetimeOdometerM, scooterStatus, rangeEcoKm, rangeFullKm, currentDrivingMode) {
        this.battery1SocPercent = battery1SocPercent;
        this.battery2SocPercent = battery2SocPercent;
        this.battery1TotalCurrentMa = battery1TotalCurrentMa;
        this.battery2TotalCurrentMa = battery2TotalCurrentMa;
        this.battery1TotalVoltageMv = battery1TotalVoltageMv;
        this.battery2TotalVoltageMv = battery2TotalVoltageMv;
        this.battery1UserTotalCapacityMah = battery1UserTotalCapacityMah;
        this.battery2UserTotalCapacityMah = battery2UserTotalCapacityMah;
        this.battery1RatedCapacityAh = battery1RatedCapacityAh;
        this.battery2RatedCapacityAh = battery2RatedCapacityAh;
        this.battery1CapacityRemainingMah = battery1CapacityRemainingMah;
        this.battery2CapacityRemainingMah = battery2CapacityRemainingMah;
        this.battery1Alarm485 = battery1Alarm485;
        this.battery2Alarm485 = battery2Alarm485;
        this.batteryStatus = batteryStatus;
        this.rpm = rpm;
        this.ecuHeartbeatCount = ecuHeartbeatCount;
        this.controllerTemperatureDeg = controllerTemperatureDeg;
        this.motorTemperatureDeg = motorTemperatureDeg;
        this.throttlePositionPercent = throttlePositionPercent;
        this.speedKmh = speedKmh;
        this.lifetimeOdometerM = lifetimeOdometerM;
        this.scooterStatus = scooterStatus;
        this.rangeEcoKm = rangeEcoKm;
        this.rangeFullKm = rangeFullKm;
        this.currentDrivingMode = currentDrivingMode;
    }
    ProtocolXTorrotMuviScooterData.mask = BigInt(1) << BigInt(35);
    return ProtocolXTorrotMuviScooterData;
}());
exports.ProtocolXTorrotMuviScooterData = ProtocolXTorrotMuviScooterData;
