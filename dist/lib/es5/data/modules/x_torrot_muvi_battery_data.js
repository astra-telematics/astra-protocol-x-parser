"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXTorrotMuviBatteryData = void 0;
var ProtocolXTorrotMuviBatteryData = /** @class */ (function () {
    function ProtocolXTorrotMuviBatteryData(battery1SerialNumber, battery2SerialNumber, battery1CycleCount, battery2CycleCount, battery1DistanceKm, battery2DistanceKm, status, reserved) {
        this.battery1SerialNumber = battery1SerialNumber;
        this.battery2SerialNumber = battery2SerialNumber;
        this.battery1CycleCount = battery1CycleCount;
        this.battery2CycleCount = battery2CycleCount;
        this.battery1DistanceKm = battery1DistanceKm;
        this.battery2DistanceKm = battery2DistanceKm;
        this.status = status;
        this.reserved = reserved;
    }
    ProtocolXTorrotMuviBatteryData.mask = BigInt(1) << BigInt(39);
    return ProtocolXTorrotMuviBatteryData;
}());
exports.ProtocolXTorrotMuviBatteryData = ProtocolXTorrotMuviBatteryData;
