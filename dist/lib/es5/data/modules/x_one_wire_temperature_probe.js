"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXOneWireTemperatureProbe = void 0;
var ProtocolXOneWireTemperatureProbe = /** @class */ (function () {
    function ProtocolXOneWireTemperatureProbe(channel1TemperatureDeg, channel2TemperatureDeg, channel3TemperatureDeg, channel4TemperatureDeg) {
        this.channel1TemperatureDeg = channel1TemperatureDeg;
        this.channel2TemperatureDeg = channel2TemperatureDeg;
        this.channel3TemperatureDeg = channel3TemperatureDeg;
        this.channel4TemperatureDeg = channel4TemperatureDeg;
    }
    ProtocolXOneWireTemperatureProbe.mask = BigInt(1) << BigInt(18);
    return ProtocolXOneWireTemperatureProbe;
}());
exports.ProtocolXOneWireTemperatureProbe = ProtocolXOneWireTemperatureProbe;
