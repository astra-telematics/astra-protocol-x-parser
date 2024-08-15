export declare class ProtocolXHeinzmannData {
    static mask: bigint;
    batterySocPercent?: number;
    batteryVoltageV?: number;
    lifetimeOdometerM?: number;
    canTimeS?: number;
    reserved?: Buffer;
    constructor(batterySocPercent: number, batteryVoltageV: number, lifetimeOdometerM: number, canTimeS: number, reserved: Buffer);
}
