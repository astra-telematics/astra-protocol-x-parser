var ProtocolXCarrierTemperatureData = /** @class */ (function () {
    function ProtocolXCarrierTemperatureData(channel1ReturnTemperatureDeg, channel2ReturnTemperatureDeg, channel3ReturnTemperatureDeg, channel4ReturnTemperatureDeg, channel5ReturnTemperatureDeg, channel6ReturnTemperatureDeg, compartment1Setpoint, compartment2Setpoint, compartment3Setpoint, refrigeratorFuelLevelRaw, refrigeratorTotalEngineHours, refrigeratorTotalStandbyHours, refrigeratorStatusMask, alarmFlagsMask) {
        this.channel1ReturnTemperatureDeg = channel1ReturnTemperatureDeg;
        this.channel2ReturnTemperatureDeg = channel2ReturnTemperatureDeg;
        this.channel3ReturnTemperatureDeg = channel3ReturnTemperatureDeg;
        this.channel4ReturnTemperatureDeg = channel4ReturnTemperatureDeg;
        this.channel5ReturnTemperatureDeg = channel5ReturnTemperatureDeg;
        this.channel6ReturnTemperatureDeg = channel6ReturnTemperatureDeg;
        this.compartment1Setpoint = compartment1Setpoint;
        this.compartment2Setpoint = compartment2Setpoint;
        this.compartment3Setpoint = compartment3Setpoint;
        this.refrigeratorFuelLevelRaw = refrigeratorFuelLevelRaw;
        this.refrigeratorTotalEngineHours = refrigeratorTotalEngineHours;
        this.refrigeratorTotalStandbyHours = refrigeratorTotalStandbyHours;
        this.refrigeratorStatusMask = refrigeratorStatusMask;
        this.alarmFlagsMask = alarmFlagsMask;
    }
    ProtocolXCarrierTemperatureData.mask = BigInt(1) << BigInt(17);
    return ProtocolXCarrierTemperatureData;
}());
export { ProtocolXCarrierTemperatureData };
