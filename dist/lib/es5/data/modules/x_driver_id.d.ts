import { ProtocolXDriverIdSource } from "../x_driver_id_source";
export declare class ProtocolXDriverId {
    static mask: bigint;
    source: ProtocolXDriverIdSource;
    serialNumber: string;
    constructor(source: ProtocolXDriverIdSource, serialNumber: string);
}
