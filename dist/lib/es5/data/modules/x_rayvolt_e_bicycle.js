"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXRayvoltEBicycle = void 0;
var ProtocolXRayvoltEBicycle = /** @class */ (function () {
    function ProtocolXRayvoltEBicycle(controllerUid, controllerFirmwareVersion, controllerFirmwareBoot, errorFlags, batterySocPercent, batteryVoltage, controllerTemperatureDeg, currentSpeedKmh, status) {
        this.controllerUid = controllerUid;
        this.controllerFirmwareVersion = controllerFirmwareVersion;
        this.controllerFirmwareBoot = controllerFirmwareBoot;
        this.errorFlags = errorFlags;
        this.batterySocPercent = batterySocPercent;
        this.batteryVoltage = batteryVoltage;
        this.controllerTemperatureDeg = controllerTemperatureDeg;
        this.currentSpeedKmh = currentSpeedKmh;
        this.status = status;
    }
    ProtocolXRayvoltEBicycle.mask = BigInt(1) << BigInt(20);
    return ProtocolXRayvoltEBicycle;
}());
exports.ProtocolXRayvoltEBicycle = ProtocolXRayvoltEBicycle;
