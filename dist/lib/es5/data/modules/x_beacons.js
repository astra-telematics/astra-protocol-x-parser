"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXBeacons = exports.ProtocolXBeacon = exports.ProtocolXBeaconType = void 0;
var ProtocolXBeaconType;
(function (ProtocolXBeaconType) {
    ProtocolXBeaconType[ProtocolXBeaconType["NONE"] = 0] = "NONE";
    ProtocolXBeaconType[ProtocolXBeaconType["HEIGHT"] = 1] = "HEIGHT";
})(ProtocolXBeaconType || (exports.ProtocolXBeaconType = ProtocolXBeaconType = {}));
var ProtocolXBeacon = /** @class */ (function () {
    function ProtocolXBeacon() {
    }
    return ProtocolXBeacon;
}());
exports.ProtocolXBeacon = ProtocolXBeacon;
var ProtocolXBeacons = /** @class */ (function () {
    function ProtocolXBeacons() {
    }
    ProtocolXBeacons.mask = BigInt(1) << BigInt(44);
    return ProtocolXBeacons;
}());
exports.ProtocolXBeacons = ProtocolXBeacons;
