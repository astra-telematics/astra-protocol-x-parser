var ProtocolXSimCardSerialNumber = /** @class */ (function () {
    function ProtocolXSimCardSerialNumber(iccid) {
        this.iccid = iccid;
    }
    ProtocolXSimCardSerialNumber.mask = BigInt(1) << BigInt(27);
    return ProtocolXSimCardSerialNumber;
}());
export { ProtocolXSimCardSerialNumber };
