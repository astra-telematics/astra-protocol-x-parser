export class ProtocolXFmsJourneyStartData
{
    static mask: bigint = BigInt(1) << BigInt(10);

    public axleWeightKg: number;

    constructor (
        axleWeightKg: number
    )
    {
        this.axleWeightKg = axleWeightKg;
    }
}