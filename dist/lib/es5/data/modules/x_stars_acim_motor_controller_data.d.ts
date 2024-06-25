export declare class ProtocolXStarsAcimMotorControllerData {
    static mask: bigint;
    rpmLeft: number;
    rpmRight: number;
    motorTemperatureLeftDeg: number;
    motorTemperatureRightDeg: number | undefined;
    controllerTemperatureLeftDeg: number;
    controllerTemperatureRightDeg: number;
    batteryVoltageV: number;
    batterySocPercent: number;
    motorVoltageLeftV: number;
    motorVoltageRightV: number;
    motorCurrentLeftA: number;
    motorCurrentRightA: number;
    vehicleSpeedKmh: number;
    lifetimeOdometerRaw: number;
    status: number;
    error0Status: number;
    error1Status: number;
    error2Status: number;
    canEventDateTime?: Date;
    constructor(rpmLeft: number, rpmRight: number, motorTemperatureLeftDeg: number, motorTemperatureRightDeg: number, controllerTemperatureLeftDeg: number, controllerTemperatureRightDeg: number, batteryVoltageV: number, batterySocPercent: number, motorVoltageLeftV: number, motorVoltageRightV: number, motorCurrentLeftA: number, motorCurrentRightA: number, vehicleSpeedKmh: number, lifetimeOdometerRaw: number, status: number, error0Status: number, error1Status: number, error2Status: number);
}
