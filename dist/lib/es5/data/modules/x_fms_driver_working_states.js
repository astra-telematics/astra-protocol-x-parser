"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXFmsDriverWorkingStates = void 0;
var ProtocolXFmsDriverWorkingStates = /** @class */ (function () {
    function ProtocolXFmsDriverWorkingStates(driverWorkingStates, doorControl1) {
        this.driverWorkingStates = driverWorkingStates;
        this.doorControl1 = doorControl1;
    }
    ProtocolXFmsDriverWorkingStates.mask = BigInt(1) << BigInt(30);
    return ProtocolXFmsDriverWorkingStates;
}());
exports.ProtocolXFmsDriverWorkingStates = ProtocolXFmsDriverWorkingStates;
