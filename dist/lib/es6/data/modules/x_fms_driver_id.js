var ProtocolXFmsDriverId = /** @class */ (function () {
    function ProtocolXFmsDriverId(driverId1, driverId2) {
        this.driverId1 = driverId1;
        this.driverId2 = driverId2;
    }
    ProtocolXFmsDriverId.mask = BigInt(1) << BigInt(28);
    return ProtocolXFmsDriverId;
}());
export { ProtocolXFmsDriverId };
