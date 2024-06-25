var ProtocolXTrailerId = /** @class */ (function () {
    function ProtocolXTrailerId(source, trailerIdNumber, trailerIdStatus) {
        this.source = source;
        this.trailerIdNumber = trailerIdNumber;
        this.trailerIdStatus = trailerIdStatus;
    }
    ProtocolXTrailerId.mask = BigInt(1) << BigInt(9);
    return ProtocolXTrailerId;
}());
export { ProtocolXTrailerId };
