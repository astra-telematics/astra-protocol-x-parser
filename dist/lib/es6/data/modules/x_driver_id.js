var ProtocolXDriverId = /** @class */ (function () {
    function ProtocolXDriverId(source, serialNumber) {
        this.source = source;
        this.serialNumber = serialNumber;
    }
    ProtocolXDriverId.mask = BigInt(1) << BigInt(8);
    return ProtocolXDriverId;
}());
export { ProtocolXDriverId };
