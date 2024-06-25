export declare class ProtocolXCarrierTemperatureData {
    static mask: bigint;
    channel1ReturnTemperatureDeg: number;
    channel2ReturnTemperatureDeg: number;
    channel3ReturnTemperatureDeg: number;
    channel4ReturnTemperatureDeg: number;
    channel5ReturnTemperatureDeg: number;
    channel6ReturnTemperatureDeg: number;
    compartment1Setpoint: number;
    compartment2Setpoint: number;
    compartment3Setpoint: number;
    refrigeratorFuelLevelRaw: number;
    refrigeratorTotalEngineHours: number;
    refrigeratorTotalStandbyHours: number;
    refrigeratorStatusMask: number;
    alarmFlagsMask: number;
    constructor(channel1ReturnTemperatureDeg: number, channel2ReturnTemperatureDeg: number, channel3ReturnTemperatureDeg: number, channel4ReturnTemperatureDeg: number, channel5ReturnTemperatureDeg: number, channel6ReturnTemperatureDeg: number, compartment1Setpoint: number, compartment2Setpoint: number, compartment3Setpoint: number, refrigeratorFuelLevelRaw: number, refrigeratorTotalEngineHours: number, refrigeratorTotalStandbyHours: number, refrigeratorStatusMask: number, alarmFlagsMask: number);
}
