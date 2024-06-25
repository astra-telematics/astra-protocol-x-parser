var ProtocolXObdDtcCodes = /** @class */ (function () {
    function ProtocolXObdDtcCodes(confirmedDtc1, confirmedDtc2, confirmedDtc3, confirmedDtc4, confirmedDtc5) {
        this.confirmedDtc1 = confirmedDtc1;
        this.confirmedDtc2 = confirmedDtc2;
        this.confirmedDtc3 = confirmedDtc3;
        this.confirmedDtc4 = confirmedDtc4;
        this.confirmedDtc5 = confirmedDtc5;
    }
    ProtocolXObdDtcCodes.mask = BigInt(1) << BigInt(14);
    return ProtocolXObdDtcCodes;
}());
export { ProtocolXObdDtcCodes };
