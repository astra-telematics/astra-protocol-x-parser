import * as moment from "moment";

export class ProtocolXStarsAcimMotorControllerData
{
    static mask: bigint = BigInt(1) << BigInt(41);

    public rpmLeft: number;
    public rpmRight: number;
    public motorTemperatureLeftDeg: number;
    public motorTemperatureRightDeg: number | undefined;
    public controllerTemperatureLeftDeg: number;
    public controllerTemperatureRightDeg: number;
    public batteryVoltageV: number;
    public batterySocPercent: number;
    public motorVoltageLeftV: number;
    public motorVoltageRightV: number;
    public motorCurrentLeftA: number;
    public motorCurrentRightA: number;
    public vehicleSpeedKmh: number;
    public lifetimeOdometerRaw: number;
    public status: number;
    public error0Status: number;
    public error1Status: number;
    public error2Status: number;
    public canEventDateTime?: moment.Moment;

    constructor (
         rpmLeft: number,
         rpmRight: number,
         motorTemperatureLeftDeg: number,
         motorTemperatureRightDeg: number,
         controllerTemperatureLeftDeg: number,
         controllerTemperatureRightDeg: number,
         batteryVoltageV: number,
         batterySocPercent: number,
         motorVoltageLeftV: number,
         motorVoltageRightV: number,
         motorCurrentLeftA: number,
         motorCurrentRightA: number,
         vehicleSpeedKmh: number,
         lifetimeOdometerRaw: number,
         status: number,
         error0Status: number,
         error1Status: number,
         error2Status: number
    )
    {
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
}