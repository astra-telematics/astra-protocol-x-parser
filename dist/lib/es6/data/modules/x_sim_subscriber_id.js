var ProtocolXSimSubscriberId = /** @class */ (function () {
    function ProtocolXSimSubscriberId(imsi) {
        this.imsi = imsi;
    }
    ProtocolXSimSubscriberId.mask = BigInt(1) << BigInt(26);
    return ProtocolXSimSubscriberId;
}());
export { ProtocolXSimSubscriberId };
