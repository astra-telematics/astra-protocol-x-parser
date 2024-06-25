export declare class ProtocolXAstraGenericCanDataEntry {
    id: number;
    data: Buffer;
    constructor(id: number, data: Buffer);
}
export declare class ProtocolXAstraGenericCanData {
    static mask: bigint;
    entries?: ProtocolXAstraGenericCanDataEntry[];
}
