var ProtocolXAskollEs2ScooterData = /** @class */ (function () {
    function ProtocolXAskollEs2ScooterData(canEventDateTime, battery1SocPercent, battery2SocPercent, battery1SerialNumber, battery2SerialNumber, batteryTemperatureDeg, batteryVoltageMv, batteryCurrentMa, batteryHeartbeatFlags, speedKmh, lifetimeOdometerM, tripDistanceM, estimatedRangeKm, statusInformation2020Model, statusInformation2021Model, drivingProfile, remainingCapacityMah, errorFlags, gnssHdop, gnssEstimatedPositionErrorM) {
        this.canEventDateTime = canEventDateTime;
        this.battery1SocPercent = battery1SocPercent;
        this.battery2SocPercent = battery2SocPercent;
        this.battery1SerialNumber = battery1SerialNumber;
        this.battery2SerialNumber = battery2SerialNumber;
        this.batteryTemperatureDeg = batteryTemperatureDeg;
        this.batteryVoltageMv = batteryVoltageMv;
        this.batteryCurrentMa = batteryCurrentMa;
        this.batteryHeartbeatFlags = batteryHeartbeatFlags;
        this.speedKmh = speedKmh;
        this.lifetimeOdometerM = lifetimeOdometerM;
        this.tripDistanceM = tripDistanceM;
        this.estimatedRangeKm = estimatedRangeKm;
        this.statusInformation2020Model = statusInformation2020Model;
        this.statusInformation2021Model = statusInformation2021Model;
        this.drivingProfile = drivingProfile;
        this.remainingCapacityMah = remainingCapacityMah;
        this.errorFlags = errorFlags;
        this.gnssHdop = gnssHdop;
        this.gnssEstimatedPositionErrorM = gnssEstimatedPositionErrorM;
    }
    ProtocolXAskollEs2ScooterData.mask = BigInt(1) << BigInt(37);
    return ProtocolXAskollEs2ScooterData;
}());
export { ProtocolXAskollEs2ScooterData };
