export class ProtocolXAstraGenericCanDataEntry
{
    public id: number;
    public data: Buffer;
    public dataAgeS: number;

    constructor (
        id: number,
        data: Buffer,
        dataAgeS: number
    )
    {
        this.id = id;
        this.data = data;
        this.dataAgeS = dataAgeS;
    }
}

export class ProtocolXAstraGenericCanData
{
    static mask: bigint = BigInt(1) << BigInt(45);

    public entries?: ProtocolXAstraGenericCanDataEntry[]
}