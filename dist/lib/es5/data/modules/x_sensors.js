"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXSensors = exports.ProtocolXSensor = exports.ProtocolXSensorType = void 0;
var ProtocolXSensorType;
(function (ProtocolXSensorType) {
    ProtocolXSensorType[ProtocolXSensorType["UNASSIGNED"] = 0] = "UNASSIGNED";
    ProtocolXSensorType[ProtocolXSensorType["TEMPERATURE"] = 1] = "TEMPERATURE";
    ProtocolXSensorType[ProtocolXSensorType["HUMIDITY"] = 2] = "HUMIDITY";
    ProtocolXSensorType[ProtocolXSensorType["LIGHT"] = 3] = "LIGHT";
})(ProtocolXSensorType || (exports.ProtocolXSensorType = ProtocolXSensorType = {}));
var ProtocolXSensor = /** @class */ (function () {
    function ProtocolXSensor(index, type, dataValid, temperatureDeg, humidityPercent) {
        this.index = index;
        this.type = type;
        this.dataValid = dataValid;
        this.temperatureDeg = temperatureDeg;
        this.humidityPercent = humidityPercent;
    }
    return ProtocolXSensor;
}());
exports.ProtocolXSensor = ProtocolXSensor;
var ProtocolXSensors = /** @class */ (function () {
    function ProtocolXSensors() {
    }
    ProtocolXSensors.mask = BigInt(1) << BigInt(32);
    return ProtocolXSensors;
}());
exports.ProtocolXSensors = ProtocolXSensors;
