"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXGeofences = void 0;
var ProtocolXGeofences = /** @class */ (function () {
    function ProtocolXGeofences(eventIndex) {
        this.eventIndex = eventIndex;
    }
    ProtocolXGeofences.mask = BigInt(1) << BigInt(7);
    return ProtocolXGeofences;
}());
exports.ProtocolXGeofences = ProtocolXGeofences;
