"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXDriverBehaviour = void 0;
var ProtocolXDriverBehaviour = /** @class */ (function () {
    function ProtocolXDriverBehaviour(accelXMaxMss, accelXMinMss, accelYMaxMss, accelYMinMss, accelZMaxMss, accelZMinMss, idleTimeS) {
        this.accelXMaxMss = accelXMaxMss;
        this.accelXMinMss = accelXMinMss;
        this.accelYMaxMss = accelYMaxMss;
        this.accelYMinMss = accelYMinMss;
        this.accelZMaxMss = accelZMaxMss;
        this.accelZMinMss = accelZMinMss;
        this.idleTimeS = idleTimeS;
    }
    ProtocolXDriverBehaviour.mask = BigInt(1) << BigInt(4);
    return ProtocolXDriverBehaviour;
}());
exports.ProtocolXDriverBehaviour = ProtocolXDriverBehaviour;
