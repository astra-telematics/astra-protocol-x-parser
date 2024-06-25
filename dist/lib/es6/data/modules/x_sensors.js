export var ProtocolXSensorType;
(function (ProtocolXSensorType) {
    ProtocolXSensorType[ProtocolXSensorType["UNASSIGNED"] = 0] = "UNASSIGNED";
    ProtocolXSensorType[ProtocolXSensorType["TEMPERATURE"] = 1] = "TEMPERATURE";
    ProtocolXSensorType[ProtocolXSensorType["HUMIDITY"] = 2] = "HUMIDITY";
    ProtocolXSensorType[ProtocolXSensorType["LIGHT"] = 3] = "LIGHT";
})(ProtocolXSensorType || (ProtocolXSensorType = {}));
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
export { ProtocolXSensor };
var ProtocolXSensors = /** @class */ (function () {
    function ProtocolXSensors() {
    }
    ProtocolXSensors.mask = BigInt(1) << BigInt(32);
    return ProtocolXSensors;
}());
export { ProtocolXSensors };
