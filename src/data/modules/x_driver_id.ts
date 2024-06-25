import { ProtocolXDriverIdSource } from "../x_driver_id_source";

export class ProtocolXDriverId
{
    static mask: bigint = BigInt(1) << BigInt(8);

    public source: ProtocolXDriverIdSource;
    public serialNumber: string;

    constructor (
        source: ProtocolXDriverIdSource,
        serialNumber: string
    )
    {
        this.source = source;
        this.serialNumber = serialNumber;
    }
}