import { ProtocolXTrailerIdSource } from "../x_trailer_id_source";

export class ProtocolXTrailerId
{
    static mask: bigint = BigInt(1) << BigInt(9);

    public source: ProtocolXTrailerIdSource;
    public trailerIdNumber: string;
    public trailerIdStatus: number;

    constructor (
        source: ProtocolXTrailerIdSource,
        trailerIdNumber: string,
        trailerIdStatus: number,
    )
    {
        this.source = source;
        this.trailerIdNumber = trailerIdNumber;
        this.trailerIdStatus = trailerIdStatus;
    }
}