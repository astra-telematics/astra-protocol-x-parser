export enum ProtocolXAstraDebugDataType
{
    NV_DATA = 1,
    SYSTEM_DATA = 2
}

export class ProtocolXAstraDebugNvData
{
    public flags: number;
    public pcRegister: number;
    public lrRegister: number;
    public watchdogLevels?: number[];
    public watchdogServiceName?: string;

    constructor (
        flags: number,
        pcRegister: number,
        lrRegister: number,
    )
    {
        this.flags = flags;
        this.pcRegister = pcRegister;
        this.lrRegister = lrRegister;
    }
}

export class ProtocolXAstraGenericDebugData
{
    static mask: bigint = BigInt(1) << BigInt(47);

    public nvData?: ProtocolXAstraDebugNvData;
}