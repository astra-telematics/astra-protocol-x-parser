var ProtocolXStarsAcimMotorControllerData = /** @class */ (function () {
    function ProtocolXStarsAcimMotorControllerData(rpmLeft, rpmRight, motorTemperatureLeftDeg, motorTemperatureRightDeg, controllerTemperatureLeftDeg, controllerTemperatureRightDeg, batteryVoltageV, batterySocPercent, motorVoltageLeftV, motorVoltageRightV, motorCurrentLeftA, motorCurrentRightA, vehicleSpeedKmh, lifetimeOdometerRaw, status, error0Status, error1Status, error2Status) {
        this.rpmLeft = rpmLeft;
        this.rpmRight = rpmRight;
        this.motorTemperatureLeftDeg = motorTemperatureLeftDeg;
        this.motorTemperatureRightDeg = motorTemperatureRightDeg;
        this.controllerTemperatureLeftDeg = controllerTemperatureLeftDeg;
        this.controllerTemperatureRightDeg = controllerTemperatureRightDeg;
        this.batteryVoltageV = batteryVoltageV;
        this.batterySocPercent = batterySocPercent;
        this.motorVoltageLeftV = motorVoltageLeftV;
        this.motorVoltageRightV = motorVoltageRightV;
        this.motorCurrentLeftA = motorCurrentLeftA;
        this.motorCurrentRightA = motorCurrentRightA;
        this.vehicleSpeedKmh = vehicleSpeedKmh;
        this.lifetimeOdometerRaw = lifetimeOdometerRaw;
        this.status = status;
        this.error0Status = error0Status;
        this.error1Status = error1Status;
        this.error2Status = error2Status;
    }
    ProtocolXStarsAcimMotorControllerData.mask = BigInt(1) << BigInt(41);
    return ProtocolXStarsAcimMotorControllerData;
}());
export { ProtocolXStarsAcimMotorControllerData };
