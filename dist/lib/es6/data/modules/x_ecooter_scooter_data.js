var ProtocolXEcooterScooterData = /** @class */ (function () {
    function ProtocolXEcooterScooterData(battery1SocPercent, battery2SocPercent, battery1TemperatureDeg, battery2TemperatureDeg, totalBatteryCurrentMa, status) {
        this.battery1SocPercent = battery1SocPercent;
        this.battery2SocPercent = battery2SocPercent;
        this.battery1TemperatureDeg = battery1TemperatureDeg;
        this.battery2TemperatureDeg = battery2TemperatureDeg;
        this.totalBatteryCurrentMa = totalBatteryCurrentMa;
        this.status = status;
    }
    ProtocolXEcooterScooterData.mask = BigInt(1) << BigInt(34);
    return ProtocolXEcooterScooterData;
}());
export { ProtocolXEcooterScooterData };
