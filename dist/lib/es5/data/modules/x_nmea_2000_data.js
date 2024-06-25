"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXNmea2000Data = void 0;
var ProtocolXNmea2000Data = /** @class */ (function () {
    function ProtocolXNmea2000Data(fuelLevelPercent, oilLevelPercent, stateOfChargePercent, stateOfHealthPercent, batteryCapacity, chargerEnableDisable, timeToEmpty, distanceToEmpty, tripRunTime, tripFuelUsed, engineOilPressurePa, engineOilTemperatureDegK, engineTemperatureDegK, alternatorVoltageMv, fuelRateM3h, totalEngineHours, engineCoolantPressure, fuelPressure, engineDiscreteStatus1, engineDiscreteStatus2, engineLoadPercent, engineTorquePercent, waterDepthAtTransducerM, waterDepthTransducerOffsetM, windSpeedMps, airTemperatureDegK, reserved) {
        this.fuelLevelPercent = fuelLevelPercent;
        this.oilLevelPercent = oilLevelPercent;
        this.stateOfChargePercent = stateOfChargePercent;
        this.stateOfHealthPercent = stateOfHealthPercent;
        this.batteryCapacity = batteryCapacity;
        this.chargerEnableDisable = chargerEnableDisable;
        this.timeToEmpty = timeToEmpty;
        this.distanceToEmpty = distanceToEmpty;
        this.tripRunTime = tripRunTime;
        this.tripFuelUsed = tripFuelUsed;
        this.engineOilPressurePa = engineOilPressurePa;
        this.engineOilTemperatureDegK = engineOilTemperatureDegK;
        this.engineTemperatureDegK = engineTemperatureDegK;
        this.alternatorVoltageMv = alternatorVoltageMv;
        this.fuelRateM3h = fuelRateM3h;
        this.totalEngineHours = totalEngineHours;
        this.engineCoolantPressure = engineCoolantPressure;
        this.fuelPressure = fuelPressure;
        this.engineDiscreteStatus1 = engineDiscreteStatus1;
        this.engineDiscreteStatus2 = engineDiscreteStatus2;
        this.engineLoadPercent = engineLoadPercent;
        this.engineTorquePercent = engineTorquePercent;
        this.waterDepthAtTransducerM = waterDepthAtTransducerM;
        this.waterDepthTransducerOffsetM = waterDepthTransducerOffsetM;
        this.windSpeedMps = windSpeedMps;
        this.airTemperatureDegK = airTemperatureDegK;
        this.reserved = reserved;
    }
    ProtocolXNmea2000Data.mask = BigInt(1) << BigInt(25);
    return ProtocolXNmea2000Data;
}());
exports.ProtocolXNmea2000Data = ProtocolXNmea2000Data;
