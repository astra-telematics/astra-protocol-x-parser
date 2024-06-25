export declare enum ProtocolXAstraDebugDataType {
    NV_DATA = 1,
    SYSTEM_DATA = 2
}
export declare class ProtocolXAstraDebugNvData {
    flags: number;
    pcRegister: number;
    lrRegister: number;
    watchdogLevels?: number[];
    watchdogServiceName?: string;
    constructor(flags: number, pcRegister: number, lrRegister: number);
}
export declare class ProtocolXAstraGenericDebugData {
    static mask: bigint;
    nvData?: ProtocolXAstraDebugNvData;
}
