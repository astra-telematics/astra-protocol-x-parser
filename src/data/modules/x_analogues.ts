export class ProtocolXAnalogues
{
    static mask: bigint = BigInt(1) << BigInt(3);

    public adc1Value: number;
    public adc2Value: number;

    constructor (
        adc1Value: number,
        adc2Value: number
    )
    {
        this.adc1Value = adc1Value;
        this.adc2Value = adc2Value;
    }
}