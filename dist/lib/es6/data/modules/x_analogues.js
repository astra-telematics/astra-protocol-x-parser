var ProtocolXAnalogues = /** @class */ (function () {
    function ProtocolXAnalogues(adc1Value, adc2Value) {
        this.adc1Value = adc1Value;
        this.adc2Value = adc2Value;
    }
    ProtocolXAnalogues.mask = BigInt(1) << BigInt(3);
    return ProtocolXAnalogues;
}());
export { ProtocolXAnalogues };
