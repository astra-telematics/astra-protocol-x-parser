"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXEcooterSerialNumbers = void 0;
var ProtocolXEcooterSerialNumbers = /** @class */ (function () {
    function ProtocolXEcooterSerialNumbers(battery1SerialNumber, battery2SerialNumber) {
        this.battery1SerialNumber = battery1SerialNumber;
        this.battery2SerialNumber = battery2SerialNumber;
    }
    ProtocolXEcooterSerialNumbers.mask = BigInt(1) << BigInt(36);
    return ProtocolXEcooterSerialNumbers;
}());
exports.ProtocolXEcooterSerialNumbers = ProtocolXEcooterSerialNumbers;
