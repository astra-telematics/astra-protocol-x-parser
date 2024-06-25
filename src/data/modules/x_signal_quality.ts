export class ProtocolXSignalQuality
{
    static mask: bigint = BigInt(1) << BigInt(5);

    public gnssSatellitesInUse: number;
    public gsmSignalStrength: number;

    constructor (
        gnssSatellitesInUse: number,
        gsmSignalStrength: number
    )
    {
        this.gnssSatellitesInUse = gnssSatellitesInUse;
        this.gsmSignalStrength = gsmSignalStrength;
    }
}