export declare enum ProtocolXSensorType {
    UNASSIGNED = 0,
    TEMPERATURE = 1,
    HUMIDITY = 2,
    LIGHT = 3
}
export declare class ProtocolXSensor {
    index: number;
    type: ProtocolXSensorType;
    dataValid: boolean;
    temperatureDeg?: number;
    humidityPercent?: number;
    constructor(index: number, type: ProtocolXSensorType, dataValid: boolean, temperatureDeg?: number, humidityPercent?: number);
}
export declare class ProtocolXSensors {
    static mask: bigint;
    sensors?: ProtocolXSensor[];
}
