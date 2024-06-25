var ProtocolXEcon3Byte = /** @class */ (function () {
    function ProtocolXEcon3Byte(rawStatus) {
        this.rawStatus = rawStatus;
    }
    ProtocolXEcon3Byte.mask = BigInt(1) << BigInt(21);
    return ProtocolXEcon3Byte;
}());
export { ProtocolXEcon3Byte };
