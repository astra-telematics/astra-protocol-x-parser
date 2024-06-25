export declare class ProtocolXCar2Data {
    static mask: bigint;
    batterySocRaw: number;
    batteryChargingMode: number;
    seatbeltStatus: number;
    brakePosition: number;
    status: number;
    faults: number;
    canEventDateTime?: Date;
    reserved?: Buffer;
    constructor(batterySocRaw: number, batteryChargingMode: number, seatbeltStatus: number, brakePosition: number, status: number, faults: number);
}
