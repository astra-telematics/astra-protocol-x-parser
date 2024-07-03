import * as moment from "moment";

export class ProtocolXCar2Data
{
    static mask: bigint = BigInt(1) << BigInt(42);

    public batterySocRaw: number;
    public batteryChargingMode: number;
    public seatbeltStatus: number;
    public brakePosition: number;
    public status: number;
    public faults: number;
    public canEventDateTime?: moment.Moment;
    public reserved?: Buffer;

    constructor (
        batterySocRaw: number,
        batteryChargingMode: number,
        seatbeltStatus: number,
        brakePosition: number,
        status: number,
        faults: number
    )
    {
       this.batterySocRaw = batterySocRaw;
       this.batteryChargingMode = batteryChargingMode;
       this.seatbeltStatus = seatbeltStatus;
       this.brakePosition = brakePosition;
       this.status = status;
       this.faults = faults;
    }
}