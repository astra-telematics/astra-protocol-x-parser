"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXCm2010MobilityScooterController = void 0;
var ProtocolXCm2010MobilityScooterController = /** @class */ (function () {
    function ProtocolXCm2010MobilityScooterController(batterySocPercent, speedKmh, battery1VoltageV, battery2VoltageV, singleTripDistanceM, status, reserved) {
        this.batterySocPercent = batterySocPercent;
        this.speedKmh = speedKmh;
        this.battery1VoltageV = battery1VoltageV;
        this.battery2VoltageV = battery2VoltageV;
        this.singleTripDistanceM = singleTripDistanceM;
        this.status = status;
        this.reserved = reserved;
    }
    ProtocolXCm2010MobilityScooterController.mask = BigInt(1) << BigInt(44);
    return ProtocolXCm2010MobilityScooterController;
}());
exports.ProtocolXCm2010MobilityScooterController = ProtocolXCm2010MobilityScooterController;
