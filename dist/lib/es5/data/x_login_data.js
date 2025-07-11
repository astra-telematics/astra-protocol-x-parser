"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXLoginData = void 0;
var ProtocolXLoginData = /** @class */ (function () {
    function ProtocolXLoginData(imei, model, vin, firmwareVersion, hardwareRevision, settingsChecksum, protocolId) {
        this.imei = imei;
        this.model = model;
        this.vin = vin;
        this.firmwareVersion = firmwareVersion;
        this.hardwareRevision = hardwareRevision;
        this.settingsChecksum = settingsChecksum;
        this.protocolId = protocolId;
    }
    return ProtocolXLoginData;
}());
exports.ProtocolXLoginData = ProtocolXLoginData;
