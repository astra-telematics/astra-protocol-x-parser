export class ProtocolXGeofences
{
    static mask: bigint = BigInt(1) << BigInt(7);

    public eventIndex: number;

    constructor (
        eventIndex: number,
    )
    {
        this.eventIndex = eventIndex;
    }
}