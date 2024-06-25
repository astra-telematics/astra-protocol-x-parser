export class ProtocolXAstraGenericCanDataEntry
{
    public id: number;
    public data: Buffer;

    constructor (
        id: number,
        data: Buffer
    )
    {
        this.id = id;
        this.data = data;
    }
}

export class ProtocolXAstraGenericCanData
{
    static mask: bigint = BigInt(1) << BigInt(45);

    public entries?: ProtocolXAstraGenericCanDataEntry[]
}