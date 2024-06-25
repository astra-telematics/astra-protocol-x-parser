export declare class ProtocolXRayvoltEBicycle {
    static mask: bigint;
    controllerUid: number;
    controllerFirmwareVersion: number;
    controllerFirmwareBoot: number;
    errorFlags: number;
    batterySocPercent: number;
    batteryVoltage: number;
    controllerTemperatureDeg: number;
    currentSpeedKmh: number;
    status: number;
    constructor(controllerUid: number, controllerFirmwareVersion: number, controllerFirmwareBoot: number, errorFlags: number, batterySocPercent: number, batteryVoltage: number, controllerTemperatureDeg: number, currentSpeedKmh: number, status: number);
}
