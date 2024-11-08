export declare class ProtocolXAstraGenericCanDataEntry {
    id: number;
    data: Buffer;
    dataAgeS: number;
    constructor(id: number, data: Buffer, dataAgeS: number);
}
export declare class ProtocolXAstraGenericCanData {
    static mask: bigint;
    entries?: ProtocolXAstraGenericCanDataEntry[];
}
