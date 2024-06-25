var ProtocolXGsmNetworkInfo = /** @class */ (function () {
    function ProtocolXGsmNetworkInfo(mcc, mnc) {
        this.mcc = mcc;
        this.mnc = mnc;
    }
    ProtocolXGsmNetworkInfo.mask = BigInt(1) << BigInt(6);
    return ProtocolXGsmNetworkInfo;
}());
export { ProtocolXGsmNetworkInfo };
