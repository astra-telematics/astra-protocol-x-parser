export var ProtocolXBeaconType;
(function (ProtocolXBeaconType) {
    ProtocolXBeaconType[ProtocolXBeaconType["NONE"] = 0] = "NONE";
    ProtocolXBeaconType[ProtocolXBeaconType["HEIGHT"] = 1] = "HEIGHT";
})(ProtocolXBeaconType || (ProtocolXBeaconType = {}));
var ProtocolXBeacon = /** @class */ (function () {
    function ProtocolXBeacon() {
    }
    return ProtocolXBeacon;
}());
export { ProtocolXBeacon };
var ProtocolXBeacons = /** @class */ (function () {
    function ProtocolXBeacons() {
    }
    ProtocolXBeacons.mask = BigInt(1) << BigInt(44);
    return ProtocolXBeacons;
}());
export { ProtocolXBeacons };
