var ProtocolXRedforgeWeight = /** @class */ (function () {
    function ProtocolXRedforgeWeight(frontChannel, rearChannel, grossVehicleWeight, status, faultCode1, faultCode2) {
        this.frontChannel = frontChannel;
        this.rearChannel = rearChannel;
        this.grossVehicleWeight = grossVehicleWeight;
        this.status = status;
        this.faultCode1 = faultCode1;
        this.faultCode2 = faultCode2;
    }
    ProtocolXRedforgeWeight.mask = BigInt(1) << BigInt(23);
    return ProtocolXRedforgeWeight;
}());
export { ProtocolXRedforgeWeight };
