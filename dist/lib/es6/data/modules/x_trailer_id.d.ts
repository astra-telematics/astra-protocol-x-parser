import { ProtocolXTrailerIdSource } from "../x_trailer_id_source";
export declare class ProtocolXTrailerId {
    static mask: bigint;
    source: ProtocolXTrailerIdSource;
    trailerIdNumber: string;
    trailerIdStatus: number;
    constructor(source: ProtocolXTrailerIdSource, trailerIdNumber: string, trailerIdStatus: number);
}
