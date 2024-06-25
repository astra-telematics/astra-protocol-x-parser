export declare class ProtocolXTorrotMuviBatteryData {
    static mask: bigint;
    battery1SerialNumber: string;
    battery2SerialNumber: string;
    battery1CycleCount: number;
    battery2CycleCount: number;
    battery1DistanceKm: number;
    battery2DistanceKm: number;
    status: number;
    reserved: Buffer;
    constructor(battery1SerialNumber: string, battery2SerialNumber: string, battery1CycleCount: number, battery2CycleCount: number, battery1DistanceKm: number, battery2DistanceKm: number, status: number, reserved: Buffer);
}
