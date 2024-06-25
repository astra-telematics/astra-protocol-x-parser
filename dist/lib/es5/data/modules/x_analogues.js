"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXAnalogues = void 0;
var ProtocolXAnalogues = /** @class */ (function () {
    function ProtocolXAnalogues(adc1Value, adc2Value) {
        this.adc1Value = adc1Value;
        this.adc2Value = adc2Value;
    }
    ProtocolXAnalogues.mask = BigInt(1) << BigInt(3);
    return ProtocolXAnalogues;
}());
exports.ProtocolXAnalogues = ProtocolXAnalogues;
